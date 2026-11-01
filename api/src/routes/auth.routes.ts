import express from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import upload from "../utils/multer.js";
import protect from "../middleware/protect.js";
import { authLimiter, globalLimiter } from "../utils/rate-limit.js";

const router = express.Router();

router
  .route("/register")
  .post(authLimiter, upload.single("profilePicture"), register);
router.route("/login").post(authLimiter, login);
router.route("/logout").post(authLimiter, logout);
router.route("/profile").get(globalLimiter, protect, profile);

export default router;
