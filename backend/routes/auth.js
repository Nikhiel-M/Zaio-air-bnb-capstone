const authMiddleware = require('../middleware/auth');
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();



router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

   
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    });

    await user.save();

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

   
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Get current user name
router.get('/name', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId || (req.user && req.user._id);
    const user = await User.findById(userId).select('firstName lastName isHost');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user: { firstName: user.firstName, lastName: user.lastName, isHost: user.isHost } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});



router.get('/me', authMiddleware, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user: req.user });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
});

module.exports = router;