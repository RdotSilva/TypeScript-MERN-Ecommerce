import express from "express";
import { fetchPaypalClientId } from "../controllers/paypalController";

const router = express.Router();

router.route("/").get(fetchPaypalClientId);

module.exports = router;
