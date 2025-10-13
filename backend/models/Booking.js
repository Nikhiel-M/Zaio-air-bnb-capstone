const mongoose = require('mongoose');
const bookingSchema = require('../Schemas/BookingSchema.js')

// Validate check-in date is before check-out date
bookingSchema.pre('save', function(next) {
  if (this.checkInDate >= this.checkOutDate) {
    return next(new Error('Check-in date must be before check-out date'));
  }
  next();
});

// Index for queries
bookingSchema.index({ guest: 1, createdAt: -1 });
bookingSchema.index({ host: 1, createdAt: -1 });
bookingSchema.index({ property: 1, checkInDate: 1, checkOutDate: 1 });

module.exports = mongoose.model('Booking', bookingSchema);