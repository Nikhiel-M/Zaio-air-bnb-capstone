import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  // description: {
  //   type: String,
  //   required: true
  // },
 
  long_description: {
    type: String,
    required: true
  },

  // propertyType: {
  //   type: String,
  //   required: true,
  //   enum: ['House', 'Apartment', 'Condo', 'Villa', 'Cabin', 'Loft', 'Townhouse', 'Other']
  // },

  roomType: {
    type: String,
    required: true,
    enum: ['Entire place', 'Private room', 'Shared room']
  },
  address: {
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  amenities: [{
    type: [String],

  }],
    amenities: {
      type: [String],
      enum: ['Wifi', 'Kitchen', 'Parking', 'Pool', 'Gym', 'Air conditioning', 'Heating', 'TV', 'Washer', 'Dryer', 'Pets allowed', 'Smoking allowed']
    },
  bedrooms: {
    type: Number,
    required: true,
    min: 1
  },
  bathrooms: {
    type: Number,
    required: true,
    min: 1
  },
  maxGuests: {
    type: Number,
    required: true,
    min: 1
  },
  pricePerNight: {
    type: Number,
    required: true,
    min: 0
  },
  images: [{
    url: String,
    caption: String
  }],
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  availability: [{
    startDate: Date,
    endDate: Date
  }],
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  minimumStay: {
    type: Number,
    default: 1,
    min: 1
  },
  maximumStay: {
    type: Number,
    default: 365
  },
  checkInTime: {
    type: String,
    default: '15:00'
  },
  checkOutTime: {
    type: String,
    default: '11:00'
  }
}, {
  timestamps: true
});
export default propertySchema;