const express = require('express');
const auth = require('../middleware/auth');
const Property = require('../models/Property');
const router = express.Router();

// GET all properties
router.get('/properties/all', async (req, res) => {
  try {
    const properties = await Property.find({});
    
    res.status(200).json({
      success: true,
      count: properties.length,
      data: properties
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});


// GET locations for a specific country
router.get('/country/:country', async (req, res) => {
  try {
    const { country } = req.params;
    
    const properties = await Property.find({
      $or: [
        { country: { $regex: country, $options: 'i' } },
        { 'location.country': { $regex: country, $options: 'i' } },
        { 'address.country': { $regex: country, $options: 'i' } }
      ]
    });
    
    if (properties.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No properties found in ${country}`
      });
    }

    const locationsMap = new Map();
    
    properties.forEach(property => {
      const city = property.city || property.location?.city || property.address?.city || 'Unknown City';
      const state = property.state || property.location?.state || property.address?.state || 'Unknown State';
      
      const locationKey = `${city}-${state}`;
      if (!locationsMap.has(locationKey)) {
        locationsMap.set(locationKey, {
          city,
          state,
          country,
          propertyCount: 1,
          coordinates: property.location?.coordinates || property.coordinates || null
        });
      } else {
        locationsMap.get(locationKey).propertyCount++;
      }
    });
    
    const locations = Array.from(locationsMap.values());

    res.status(200).json({
      success: true,
      country,
      count: locations.length,
      data: locations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// GET all unique locations (flat list)
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find({});
    
    if (properties.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No properties found in database',
        count: 0,
        data: []
      });
    }

    const locationsMap = new Map();
    
    properties.forEach(property => {
      const city = property.city || property.location?.city || property.address?.city || 'Unknown City';
      const state = property.state || property.location?.state || property.address?.state || 'Unknown State';
      const country = property.country || property.location?.country || property.address?.country || 'Unknown Country';
      
      const key = `${city}-${state}-${country}`;
      if (!locationsMap.has(key)) {
        locationsMap.set(key, {
          id: locationsMap.size + 1,
          city,
          state,
          country,
          coordinates: property.location?.coordinates || property.coordinates || null
        });
      }
    });
    
    const uniqueLocations = Array.from(locationsMap.values());
    
    res.status(200).json({
      success: true,
      count: uniqueLocations.length,
      data: uniqueLocations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});


module.exports = router;
