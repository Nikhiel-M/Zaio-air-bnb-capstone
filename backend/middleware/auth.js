const jwt = require('jsonwebtoken');
const User = require('../models/User');
import { authAPI } from "../../src/services/api";

const auth = async (req, res, next) => {
  const logout = () => {
    authAPI.logout();
    console.log("Token is not valid, user logged out.")
  }

  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      logout();
      return res.status(402).json({
        message: "No token or expired token"
      })

    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const user = await User.findById(decoded.userId); 
    // if (!user) {
    //   return res.status(401).json({ message: 'Token is not valid' });
    // }


    req.userId = user._id;
    req.user = user;
    
    next();
  } catch (error) {

    // console.error('Auth middleware error:', error);
    // res.status(401).json({ message: 'Token is not valid' });

  }

};

module.exports = auth;