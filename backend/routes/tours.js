import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../controllers/tourController.js";

import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

router.post("/create",verifyAdmin,createTour);

router.put("/update/:id",verifyAdmin, updateTour);

router.delete("/delete/:id",verifyAdmin, deleteTour);

router.get("/tour/:id", getSingleTour);

router.get("/", getAllTour);

router.get("/search", getTourBySearch);

router.get("/search/featured", getFeaturedTour);

router.get("/search/tourCount", getTourCount);


export default router;
