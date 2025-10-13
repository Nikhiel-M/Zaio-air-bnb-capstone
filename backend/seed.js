const mongoose = require('mongoose');
const User = require('./models/User');
const Property = require('./models/Property');
require('dotenv').config();

const sampleUsers = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: 'password123',
    phoneNumber: '+1234567890',
    isHost: true,
    role: 'host'
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    password: 'password123',
    phoneNumber: '+1234567891',
    isHost: false,
    role: 'user'
  },
  {
    firstName: 'Bob',
    lastName: 'Wilson',
    email: 'bob@example.com',
    password: 'password123',
    phoneNumber: '+1234567892',
    isHost: true,
    role: 'host'
  }
];

const sampleProperties = [
  {
    title: 'Beautiful Beach House',
    description: 'A stunning beach house with ocean views, perfect for a relaxing getaway.',
    propertyType: 'house',
    roomType: 'entire_place',
    address: {
      street: '123 Ocean Drive',
      city: 'Miami',
      state: 'Florida',
      country: 'USA',
      zipCode: '33139',
      coordinates: {
        lat: 25.7617,
        lng: -80.1918
      }
    },
    amenities: ['wifi', 'kitchen', 'parking', 'pool', 'air_conditioning', 'tv'],
    bedrooms: 3,
    bathrooms: 2,
    beds: 3,
    maxGuests: 6,
    pricePerNight: 250,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        caption: 'Beautiful exterior view'
      },
      {
        url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        caption: 'Spacious living room'
      }
    ],
    minimumStay: 2,
    maximumStay: 14
  },
  {
    title: 'Cozy Downtown Apartment',
    description: 'Modern apartment in the heart of the city, walking distance to restaurants and attractions.',
    propertyType: 'apartment',
    roomType: 'entire_place',
    address: {
      street: '456 Main Street',
      city: 'New York',
      state: 'New York',
      country: 'USA',
      zipCode: '10001',
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    amenities: ['wifi', 'kitchen', 'air_conditioning', 'heating', 'tv', 'washer', 'dryer'],
    bedrooms: 2,
    bathrooms: 1,
    beds: 2,
    maxGuests: 4,
    pricePerNight: 180,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        caption: 'Modern kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        caption: 'Comfortable bedroom'
      }
    ],
    minimumStay: 1,
    maximumStay: 30
  },
  {
    title: 'Mountain Cabin Retreat',
    description: 'Escape to nature in this rustic cabin surrounded by mountains and forests.',
    propertyType: 'cabin',
    roomType: 'entire_place',
    address: {
      street: '789 Mountain Trail',
      city: 'Aspen',
      state: 'Colorado',
      country: 'USA',
      zipCode: '81611',
      coordinates: {
        lat: 39.1911,
        lng: -106.8175
      }
    },
    amenities: ['wifi', 'kitchen', 'parking', 'heating', 'tv'],
    bedrooms: 2,
    bathrooms: 1,
    beds: 3,
    maxGuests: 5,
    pricePerNight: 200,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
        caption: 'Rustic cabin exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        caption: 'Mountain views'
      }
    ],
    minimumStay: 2,
    maximumStay: 7
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/airbnb-clone');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Property.deleteMany({});
    console.log('Cleared existing data');

    // Create users
    const users = await User.create(sampleUsers);
    console.log('Created sample users');

    // Assign properties to hosts
    for (let i = 0; i < sampleProperties.length; i++) {
      const hostIndex = i % 2; // Alternate between first two users (both hosts)
      sampleProperties[i].host = users[hostIndex]._id;
    }

    // Create properties
    const properties = await Property.create(sampleProperties);
    console.log('Created sample properties');

    console.log('\n=== SAMPLE DATA CREATED ===');
    console.log('Users created:');
    users.forEach(user => {
      console.log(`- ${user.firstName} ${user.lastName} (${user.email}) - ${user.role}`);
    });

    console.log('\nProperties created:');
    properties.forEach(property => {
      console.log(`- ${property.title} in ${property.address.city} - $${property.pricePerNight}/night`);
    });

    console.log('\n=== LOGIN CREDENTIALS ===');
    console.log('Host accounts:');
    console.log('Email: john@example.com, Password: password123');
    console.log('Email: bob@example.com, Password: password123');
    console.log('\nGuest account:');
    console.log('Email: jane@example.com, Password: password123');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();