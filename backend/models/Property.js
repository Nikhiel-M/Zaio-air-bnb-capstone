import mongoose from 'mongoose';
import propertySchema from '../Schemas/PropertySchema.js';

// Index for location-based searches
propertySchema.index({ 'address.coordinates': '2dsphere' });
propertySchema.index({ 'address.city': 1 });
propertySchema.index({ pricePerNight: 1 });
propertySchema.index({ 'rating.average': -1 });

const Property = mongoose.model('Property', propertySchema);
export default Property;