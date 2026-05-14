import Booking from "../models/Booking.js";
import Property from "../models/Property.js";

// POST /bookings - Create a new booking
export const createBooking = async (req, res) => {
  try {
    const {
      propertyId,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      totalPrice,
    } = req.body;

    const property = await Property.findById(propertyId).populate("host");
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    if (numberOfGuests > property.maxGuests) {
      return res.status(400).json({
        message: `Property can accommodate maximum ${property.maxGuests} guests`,
      });
    }

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    const overlappingBooking = await Booking.findOne({
      property: propertyId,
      status: { $in: ["confirmed", "pending"] },
      $or: [
        {
          checkInDate: { $lt: checkOut },
          checkOutDate: { $gt: checkIn },
        },
      ],
    });

    if (overlappingBooking) {
      return res.status(400).json({
        message: "Property is not available for the selected dates",
      });
    }

    const booking = new Booking({
      property: propertyId,
      guest: req.userId,
      host: property.host._id,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      numberOfGuests,
      totalPrice,
    });

    await booking.save();

    await booking.populate([
      { path: "property", select: "title address images pricePerNight" },
      { path: "guest", select: "firstName lastName email" },
      { path: "host", select: "firstName lastName email" },
    ]);

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Create booking error:", error);
    res.status(500).json({ message: "Server error while creating booking" });
  }
};

// GET /bookings/my-bookings - Get bookings for the current user
export const getMyBookings = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const filter = { guest: req.userId };
    if (status) filter.status = status;

    const skip = (Number(page) - 1) * Number(limit);

    const bookings = await Booking.find(filter)
      .populate("property", "title address images pricePerNight")
      .populate("guest", "firstName lastName email ")
      .populate("host", "firstName lastName email ")
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
        hasPrev: Number(page) > 1,
      },
    });
  } catch (error) {
    console.error("Get user bookings error:", error);
    res.status(500).json({ message: "Server error while fetching bookings" });
  }
};

// GET /bookings/host-bookings - Get bookings for the current host
export const getHostBookings = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const filter = { host: req.userId };
    if (status) filter.status = status;

    const skip = (Number(page) - 1) * Number(limit);

    const bookings = await Booking.find(filter)
      .populate("property", "title address images pricePerNight")
      .populate("guest", "firstName lastName email profilePicture")
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
        hasPrev: Number(page) > 1,
      },
    });
  } catch (error) {
    console.error("Get host bookings error:", error);
    res
      .status(500)
      .json({ message: "Server error while fetching host bookings" });
  }
};

// GET /bookings/:id - Get a single booking by ID (only guest or host can view)
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("property")
      .populate("guest", "firstName lastName email profilePicture")
      .populate("host", "firstName lastName email profilePicture");

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (
      booking.guest._id.toString() !== req.userId &&
      booking.host._id.toString() !== req.userId
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to view this booking" });
    }

    res.json({ booking });
  } catch (error) {
    console.error("Get booking error:", error);
    res.status(500).json({ message: "Server error while fetching booking" });
  }
};

// Update booking status
// PATCH /bookings/:id/status - Update booking status (host only)
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Only host can confirm/cancel bookings
    if (booking.host.toString() !== req.userId) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this booking" });
    }

    booking.status = status;
    await booking.save();

    await booking.populate([
      { path: "property", select: "title address" },
      { path: "guest", select: "firstName lastName email" },
    ]);

    res.json({
      message: "Booking status updated successfully",
      booking,
    });
  } catch (error) {
    console.error("Update booking status error:", error);
    res
      .status(500)
      .json({ message: "Server error while updating booking status" });
  }
};

// Cancel booking
// PATCH /bookings/:id/cancel - Cancel (delete) a booking (guest or host)
export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (
      booking.guest.toString() !== req.userId.toString() &&
      booking.host.toString() !== req.userId.toString()
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this booking" });
    }
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Cancel booking error:", error);
    res.status(500).json({ message: "Server error while cancelling booking" });
  }
};

export const deleteAllBookingsPerProperty = async (req, res) => {
  try{
    const propertyId = req.params.propertyId;
    await Booking.deleteMany({ property: propertyId });
    res.json({ message: "All bookings for the property deleted successfully" });
  }
catch(err){
    console.error("Delete bookings per property error:", err);
    res.status(500).json({ message: "Server error while deleting bookings for property" });
}
}