import mongoose from 'mongoose';
import bookingSchema from '../Schemas/BookingSchema.js';

bookingSchema.pre('save', function(next) {
  if (this.checkInDate >= this.checkOutDate) {
    return next(new Error('Check-in date must be before check-out date'));
  }
  next();
});

bookingSchema.index({ guest: 1, createdAt: -1 });
bookingSchema.index({ host: 1, createdAt: -1 });
bookingSchema.index({ property: 1, checkInDate: 1, checkOutDate: 1 });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;