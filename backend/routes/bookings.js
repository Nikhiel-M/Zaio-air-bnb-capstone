const express = require('express');
const Booking = require('../models/Booking');
const Property = require('../models/Property');
const auth = require('../middleware/auth');
const router = express.Router();


router.post('/', auth, async (req, res) => {
  try {
    const { propertyId, checkInDate, checkOutDate, numberOfGuests, totalPrice } = req.body;

    // Find the property
    const property = await Property.findById(propertyId).populate('host');
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Check if guest capacity is not exceeded
    if (numberOfGuests > property.maxGuests) {
      return res.status(400).json({ 
        message: `Property can accommodate maximum ${property.maxGuests} guests` 
      });
    }

    // Check for overlapping bookings
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    
    const overlappingBooking = await Booking.findOne({
      property: propertyId,
      status: { $in: ['confirmed', 'pending'] },
      $or: [
        {
          checkInDate: { $lt: checkOut },
          checkOutDate: { $gt: checkIn }
        }
      ]
    });

    if (overlappingBooking) {
      return res.status(400).json({ 
        message: 'Property is not available for the selected dates' 
      });
    }

    const booking = new Booking({
      property: propertyId,
      guest: req.userId,
      host: property.host._id,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      numberOfGuests,
      totalPrice
    });

    await booking.save();
    
    await booking.populate([
      { path: 'property', select: 'title address images pricePerNight' },
      { path: 'guest', select: 'firstName lastName email' },
      { path: 'host', select: 'firstName lastName email' }
    ]);

    res.status(201).json({
      message: 'Booking created successfully',
      booking
    });
  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({ message: 'Server error while creating booking' });
  }
});


router.get('/my-bookings', auth, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    const filter = { guest: req.userId };
    if (status) filter.status = status;

    const skip = (Number(page) - 1) * Number(limit);

    const bookings = await Booking.find(filter)
      .populate('property', 'title address images pricePerNight')
      .populate('guest', 'firstName lastName email ')
      .populate('host', 'firstName lastName email ')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const totalBookings = await Booking.countDocuments(filter);
    const totalPages = Math.ceil(totalBookings / Number(limit));

    res.json({
      bookings,
      pagination: {
        currentPage: Number(page),
        totalPages,
        totalBookings,
        hasNext: Number(page) < totalPages,
        hasPrev: Number(page) > 1
      }
    });
  } catch (error) {
    console.error('Get user bookings error:', error);
    res.status(500).json({ message: 'Server error while fetching bookings' });
  }
});


router.get('/host-bookings', auth, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    const filter = { host: req.userId };
    if (status) filter.status = status;

    const skip = (Number(page) - 1) * Number(limit);

    const bookings = await Booking.find(filter)
      .populate('property', 'title address images pricePerNight')
      .populate('guest', 'firstName lastName email profilePicture')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const totalBookings = await Booking.countDocuments(filter);
    const totalPages = Math.ceil(totalBookings / Number(limit));

    res.json({
      bookings,
      pagination: {
        currentPage: Number(page),
        totalPages,
        totalBookings,
        hasNext: Number(page) < totalPages,
        hasPrev: Number(page) > 1
      }
    });
  } catch (error) {
    console.error('Get host bookings error:', error);
    res.status(500).json({ message: 'Server error while fetching host bookings' });
  }
});


router.get('/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('property')
      .populate('guest', 'firstName lastName email profilePicture')
      .populate('host', 'firstName lastName email profilePicture');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    
    if (booking.guest._id.toString() !== req.userId && booking.host._id.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to view this booking' });
    }

    // Debug logging
    console.log('Get booking debug:', {
      bookingId: booking._id,
      guest: booking.guest.toString(),
      host: booking.host.toString(),
      userId: req.userId.toString(),
      isGuest: booking.guest.toString() === req.userId.toString(),
      isHost: booking.host.toString() === req.userId.toString()
    });

    res.json({ booking });
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({ message: 'Server error while fetching booking' });
  }
});

// Update booking status
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Only host can confirm/cancel bookings
    if (booking.host.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to update this booking' });
    }

    booking.status = status;
    await booking.save();

    await booking.populate([
      { path: 'property', select: 'title address' },
      { path: 'guest', select: 'firstName lastName email' }
    ]);

    res.json({
      message: 'Booking status updated successfully',
      booking
    });
  } catch (error) {
    console.error('Update booking status error:', error);
    res.status(500).json({ message: 'Server error while updating booking status' });
  }
});

// Cancel booking
router.patch('/:id/cancel', auth, async (req, res) => {
  try {
    const { cancellationReason } = req.body;
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const isGuest = booking.guest.toString() === req.userId.toString();
    const isHost = booking.host.toString() === req.userId.toString();

    // Debug logging
    console.log('Cancel booking debug:', {
      bookingId: booking._id,
      guest: booking.guest.toString(),
      host: booking.host.toString(),
      userId: req.userId.toString(),
      isGuest,
      isHost
    });

      if (booking.guest.toString() !== req.userId.toString() && booking.host.toString() !== req.userId.toString()) {
        return res.status(403).json({ message: 'Not authorized to cancel this booking' });
      }

    if (booking.status === 'completed') {
      return res.status(400).json({ message: 'Cannot cancel completed booking' });
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({ message: 'Booking already cancelled' });
    }

    booking.status = 'cancelled';
    booking.cancellationReason = cancellationReason || '';
    await booking.save();

    res.json({ message: 'Booking cancelled successfully', booking });
  } catch (error) {
    console.error('Cancel booking error:', error);
    res.status(500).json({ message: 'Server error while cancelling booking' });
  }
});

// Add review to booking
router.post('/:id/review', auth, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Only guest can review
    if (booking.guest.toString() !== req.userId) {
      return res.status(403).json({ message: 'Only guest can review the booking' });
    }

    // Can only review completed bookings
    if (booking.status !== 'completed') {
      return res.status(400).json({ message: 'Can only review completed bookings' });
    }

    // Check if already reviewed
    if (booking.review.rating) {
      return res.status(400).json({ message: 'Booking already reviewed' });
    }

    booking.review = {
      rating,
      comment,
      reviewDate: new Date()
    };
    await booking.save();

    // Update property rating
    const property = await Property.findById(booking.property);
    const allReviews = await Booking.find({
      property: booking.property,
      'review.rating': { $exists: true }
    });

    const totalRating = allReviews.reduce((sum, b) => sum + b.review.rating, 0);
    property.rating.average = totalRating / allReviews.length;
    property.rating.count = allReviews.length;
    await property.save();

    res.json({
      message: 'Review added successfully',
      booking
    });
  } catch (error) {
    console.error('Add review error:', error);
    res.status(500).json({ message: 'Server error while adding review' });
  }
});

module.exports = router;