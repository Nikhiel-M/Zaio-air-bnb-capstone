import authMiddleware from '../middleware/auth.js';
import { Router } from 'express';
import { registerUser, registerHost, loginUser, getCurrentUserName, meRoute } from '../Controllers/auth.controller.js';

const router = Router();


router.post('/register', registerUser);
router.post('/register-host', registerHost);
router.post('/login', loginUser);
router.get('/name', authMiddleware, getCurrentUserName);
router.get('/me', authMiddleware, meRoute);


export default router;