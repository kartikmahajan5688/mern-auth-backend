import express from "express";
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

//register
router.post("/", registerUser);

//login
router.post("/auth", authUser);

//logout
router.post("/logout", logoutUser);

//profile
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
