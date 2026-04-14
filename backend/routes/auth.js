import authMiddleware from '../middleware/auth.js';
import { Router } from 'express';
import { registerUser, registerHost, loginUser, getCurrentUserName, meRoute } from '../Controllers/auth.controller.js';
import checkHostStatus from '../middleware/Host.js';

const router = Router();


router.post('/register', registerUser);
router.post('/register-host', registerHost);
router.post('/login', loginUser);
router.get('/name', authMiddleware, getCurrentUserName);
router.get('/me', authMiddleware, meRoute);
router.get('/host', authMiddleware, checkHostStatus)


export default router;