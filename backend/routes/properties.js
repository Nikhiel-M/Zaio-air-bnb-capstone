import express from "express";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";
import {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  searchPropertiesByLocation,
} from "../Controllers/propertiesController.js";

const router = express.Router();

router.get("/", getAllProperties);
router.get("/:id", getPropertyById);
router.post("/", auth, upload.array("images", 5), createProperty);
router.delete("/:id", auth, deleteProperty);
router.get("/search/location", searchPropertiesByLocation);
router.put("/:id", auth, upload.array("images", 5), updateProperty);

export default router;
