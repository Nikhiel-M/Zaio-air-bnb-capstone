import authMiddleware from '../middleware/auth.js';
import { Router } from 'express';
import { registerUser, registerHost, loginUser, getCurrentUserName, meRoute } from '../Controllers/auth.controller.js';
import checkHostStatus from '../middleware/host.js';

const router = Router();


router.post('/register', registerUser);
router.post('/register-host', registerHost);
router.post('/login', loginUser);
router.get('/name', authMiddleware, getCurrentUserName);
router.get('/me', authMiddleware, meRoute);
router.get('/host', authMiddleware, checkHostStatus)
router.get("/host/reservations", authMiddleware, checkHostStatus)
router.get("/host/post-booking", authMiddleware, checkHostStatus)
router.get("/host/user-listings", authMiddleware, checkHostStatus)


export default router;