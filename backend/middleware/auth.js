import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No token or expired token' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'You are logged out. Please log in.' });
    }
    req.userId = user._id;
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'You are logged out. Please log in.' });
  }
};

export default auth;