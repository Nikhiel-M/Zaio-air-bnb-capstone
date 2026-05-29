import mongoose from 'mongoose';
import propertySchema from '../Schemas/PropertySchema.js';

propertySchema.index({ 'address.coordinates': '2dsphere' });
propertySchema.index({ pricePerNight: 1 });
propertySchema.index({ 'rating.average': -1 });

const Property = mongoose.model('Property', propertySchema);
export default Property;