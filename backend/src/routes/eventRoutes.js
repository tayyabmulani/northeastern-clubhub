import express from "express";
import * as eventController from "../controllers/eventController.js";

const router = express.Router();
//creates a new booking
router.route('/')
    .post(eventController.post);

export default router;