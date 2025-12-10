

import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  contactUs,
} from "../Controllers/userControllers.js";
import { protect, admin } from "../Middleware/auth.js";

const router = express.Router();

// Public
router.post("/register", registerUser);
// router.post("/login", loginUser);

// Contact Us 
// router.post("/contact",protect, contactUs);

// Protected (Customer/Admin)
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

// Admin-only
router.get("/", protect, admin, getAllUsers);

export default router;
