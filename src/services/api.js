// Frontend API service to connect to your backend
// Place this file in your React src folder as: src/services/api.js

const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add auth token if available
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

// Authentication API
export const authAPI = {
  // Register new user
  register: async (userData) => {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Login user
  login: async (credentials) => {
    const response = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    // Store token in localStorage
    if (response.token) {
      localStorage.setItem('token', response.token);
    }
    
    return response;
  },

  // Get current user
  getCurrentUser: async () => {
    return apiRequest('/auth/me');
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('token');
  },
};

// Properties API
export const propertiesAPI = {
  // Get all properties with optional filters
  getProperties: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const endpoint = queryParams ? `/properties?${queryParams}` : '/properties';
    return apiRequest(endpoint);
  },

  // Get single property
  getProperty: async (id) => {
    return apiRequest(`/properties/${id}`);
  },

  // Create new property (host only)
  createProperty: async (propertyData) => {
    return apiRequest('/properties', {
      method: 'POST',
      body: JSON.stringify(propertyData),
    });
  },

  // Update property (host only)
  updateProperty: async (id, propertyData) => {
    return apiRequest(`/properties/${id}`, {
      method: 'PUT',
      body: JSON.stringify(propertyData),
    });
  },

  // Delete property (host only)
  deleteProperty: async (id) => {
    return apiRequest(`/properties/${id}`, {
      method: 'DELETE',
    });
  },

  // Search properties by location
  searchByLocation: async (lat, lng, radius = 10) => {
    return apiRequest(`/properties/search/location?lat=${lat}&lng=${lng}&radius=${radius}`);
  },
};

// Bookings API
export const bookingsAPI = {
  // Create new booking
  createBooking: async (bookingData) => {
    return apiRequest('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  },

  // Get user's bookings
  getMyBookings: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const endpoint = queryParams ? `/bookings/my-bookings?${queryParams}` : '/bookings/my-bookings';
    return apiRequest(endpoint);
  },

  // Get host's bookings
  getHostBookings: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const endpoint = queryParams ? `/bookings/host-bookings?${queryParams}` : '/bookings/host-bookings';
    return apiRequest(endpoint);
  },

  // Get single booking
  getBooking: async (id) => {
    return apiRequest(`/bookings/${id}`);
  },

  // Update booking status (host only)
  updateBookingStatus: async (id, status) => {
    return apiRequest(`/bookings/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },

  // Cancel booking
  cancelBooking: async (id, reason = '') => {
    return apiRequest(`/bookings/${id}/cancel`, {
      method: 'PATCH',
      body: JSON.stringify({ cancellationReason: reason }),
    });
  },

  // Add review to booking
  addReview: async (id, reviewData) => {
    return apiRequest(`/bookings/${id}/review`, {
      method: 'POST',
      body: JSON.stringify(reviewData),
    });
  },
};

// Users API
export const usersAPI = {
  // Get user profile
  getProfile: async () => {
    return apiRequest('/users/profile');
  },

  // Update user profile
  updateProfile: async (userData) => {
    return apiRequest('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  },

  // Change password
  changePassword: async (passwordData) => {
    return apiRequest('/users/change-password', {
      method: 'PUT',
      body: JSON.stringify(passwordData),
    });
  },

  // Become a host
  becomeHost: async () => {
    return apiRequest('/users/become-host', {
      method: 'PATCH',
    });
  },

  // Get public user profile
  getPublicProfile: async (id) => {
    return apiRequest(`/users/${id}/public`);
  },
};

// Usage Examples:
/*

// In your React components:

import { authAPI, propertiesAPI, bookingsAPI } from './services/api';

// Login example
const handleLogin = async (email, password) => {
  try {
    const response = await authAPI.login({ email, password });
    console.log('Login successful:', response.user);
  } catch (error) {
    console.error('Login failed:', error.message);
  }
};

// Get properties example
const loadProperties = async () => {
  try {
    const data = await propertiesAPI.getProperties({ 
      city: 'Miami', 
      minPrice: 100, 
      maxPrice: 300 
    });
    console.log('Properties:', data.properties);
  } catch (error) {
    console.error('Failed to load properties:', error.message);
  }
};

// Create booking example
const createBooking = async () => {
  try {
    const bookingData = {
      propertyId: 'property-id-here',
      checkInDate: '2024-12-20',
      checkOutDate: '2024-12-25',
      numberOfGuests: 4
    };
    
    const response = await bookingsAPI.createBooking(bookingData);
    console.log('Booking created:', response.booking);
  } catch (error) {
    console.error('Booking failed:', error.message);
  }
};

*/