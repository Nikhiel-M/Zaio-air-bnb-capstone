import express from "express";
import auth from "../middleware/auth.js";
import {
  createBooking,
  getMyBookings,
  getBookingById,
  getHostBookings,
  updateBookingStatus,
  cancelBooking,
} from "../Controllers/bookingsController.js";
const router = express.Router();

router.post("/", auth, createBooking);
router.get("/my-bookings", auth, getMyBookings);
router.get("/host-bookings", auth, getHostBookings);
router.get("/:id", auth, getBookingById);
router.patch("/:id/status", auth, updateBookingStatus);
router.patch("/:id/cancel", auth, cancelBooking);

export default router;
