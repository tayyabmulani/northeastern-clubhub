import express from "express";
import * as RSVPController from "../controllers/RSVPController.js";

const router = express.Router();

// Route to create a new event
router.route('/')
    .post(RSVPController.createEvent);

export default router;
