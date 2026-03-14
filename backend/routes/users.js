import express from "express";
import auth from "../middleware/auth.js";
import { getUserProfile, becomeHost } from "../Controllers/userController.js";

const router = express.Router();

router.get("/profile", auth, getUserProfile);
router.patch("/become-host", auth, becomeHost);

export default router;


