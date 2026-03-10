import express from 'express';
import { getAllProperties, getLocationsByCountry, getAllUniqueLocations } from '../Controllers/locationsController.js';

const router = express.Router();

// GET all properties
router.get('/properties/all', getAllProperties);

// GET locations for a specific country
router.get('/country/:country', getLocationsByCountry);

// GET all unique locations (flat list)
router.get('/', getAllUniqueLocations);


export default router;
