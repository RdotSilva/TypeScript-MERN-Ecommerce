import express from "express";
import { fetchPaypalClientId } from "../controllers/paypalController";
const router = express.Router();

import { protect } from "../middleware/authMiddleware";

router.route("/").get(protect, fetchPaypalClientId);

export default router;
