import express from "express";
const router = express.Router();
import { addOrderItems, getOrderById } from "../controllers/orderController";
import { protect } from "../middleware/authMiddleware";

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);

export default router;
