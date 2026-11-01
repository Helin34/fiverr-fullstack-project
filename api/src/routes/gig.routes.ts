import express from "express";
import {
  getAllGigs,
  getOneGigs,
  createGig,
  deleteGig,
} from "../controllers/gig.controller.js";
import protect from "../middleware/protect.js";
import upload from "../utils/multer.js";

const router = express.Router();

router
  .route("/")
  .get(getAllGigs)
  .post(
    protect,
    upload.fields([
      { name: "coverImage", maxCount: 1 },
      { name: "images", maxCount: 6 },
    ]),
    createGig,
  );

router.route("/:id").get(getOneGigs).delete(protect, deleteGig);
export default router;
