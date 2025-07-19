import express from "express";
import { Protect, isRecruiter } from "../middlewares/authMiddleware.js";
import {
  addJob,
  editJob,
  viewAllJob,
  deleteJob,
  getAllApplications,
} from "../controllers/recruiterController.js";

const router = express.Router();

router.post("/addJob", Protect, isRecruiter, addJob);
router.get("/viewAllJobs", Protect, isRecruiter, viewAllJob);
router.put("/editJob/:id", Protect, isRecruiter, editJob);
router.delete("/deleteJob/:id", Protect, isRecruiter, deleteJob);
router.get("/getAllApplications", Protect, isRecruiter, getAllApplications);

export default router;
