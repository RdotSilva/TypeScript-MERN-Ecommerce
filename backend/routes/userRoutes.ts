import express from "express";
const router = express.Router();
import { authUser, getUserProfile } from "../controllers/userController";

router.route("/login").post(authUser);
router.route("/profile").get(getUserProfile);

export default router;
