const express = require('express');
const Property = require('../models/Property');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all properties with filtering and pagination
router.get('/', async (req, res) => {
  try {
    const {
      city,
      country,
      minPrice,
      maxPrice,
      propertyType,
      roomType,
      minGuests,
      page = 1,
      limit = 12,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    const filter = { isActive: true };
    
    if (city) filter['address.city'] = new RegExp(city, 'i');
    if (country) filter['address.country'] = new RegExp(country, 'i');
    if (minPrice || maxPrice) {
      filter.pricePerNight = {};
      if (minPrice) filter.pricePerNight.$gte = Number(minPrice);
      if (maxPrice) filter.pricePerNight.$lte = Number(maxPrice);
    }
    if (propertyType) filter.propertyType = propertyType;
    if (roomType) filter.roomType = roomType;
    if (minGuests) filter.maxGuests = { $gte: Number(minGuests) };

    // Calculate pagination
    const skip = (Number(page) - 1) * Number(limit);

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Get properties
    const properties = await Property.find(filter)
      .populate('host', 'firstName lastName profilePicture')
      .sort(sort)
      .skip(skip)
      .limit(Number(limit));

    // Get total count for pagination
    const totalProperties = await Property.countDocuments(filter);
    const totalPages = Math.ceil(totalProperties / Number(limit));

    res.json({
      properties,
      pagination: {
        currentPage: Number(page),
        totalPages,
        totalProperties,
        hasNext: Number(page) < totalPages,
        hasPrev: Number(page) > 1
      }
    });
  } catch (error) {
    console.error('Get properties error:', error);
    res.status(500).json({ message: 'Server error while fetching properties' });
  }
});

// Get single property by ID
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id)
      .populate('host', 'firstName lastName profilePicture email phoneNumber');
    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    res.json({ property });
  } catch (error) {
    console.error('Get property error:', error);
    res.status(500).json({ message: 'Server error while fetching property' });
  }
});

// Create new property (requires authentication)
router.post('/', auth, async (req, res) => {
  try {
    const propertyData = {
      ...req.body,
      host: req.userId
    };

    const property = new Property(propertyData);
    await property.save();
    
    await property.populate('host', 'firstName lastName profilePicture');

    res.status(201).json({
      message: 'Property created successfully',
      property
    });
  } catch (error) {
    console.error('Create property error:', error);
    res.status(500).json({ message: 'Server error while creating property' });
  }
});

// Update property (requires authentication and ownership)
router.put('/:id', auth, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Check if user is the host of this property
    if (property.host.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to update this property' });
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('host', 'firstName lastName profilePicture');

    res.json({
      message: 'Property updated successfully',
      property: updatedProperty
    });
  } catch (error) {
    console.error('Update property error:', error);
    res.status(500).json({ message: 'Server error while updating property' });
  }
});

// Delete property (requires authentication and ownership)
router.delete('/:id', auth, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Check if user is the host of this property
    if (property.host.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this property' });
    }

    await Property.findByIdAndDelete(req.params.id);

    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Delete property error:', error);
    res.status(500).json({ message: 'Server error while deleting property' });
  }
});

// Search properties by location
router.get('/search/location', async (req, res) => {
  try {
    const { lat, lng, radius = 10, limit = 20 } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    const properties = await Property.find({
      isActive: true,
      'address.coordinates': {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [Number(lng), Number(lat)]
          },
          $maxDistance: Number(radius) * 1000 // Convert km to meters
        }
      }
    })
    .populate('host', 'firstName lastName profilePicture')
    .limit(Number(limit));

    res.json({ properties });
  } catch (error) {
    console.error('Location search error:', error);
    res.status(500).json({ message: 'Server error while searching by location' });
  }
});

module.exports = router;