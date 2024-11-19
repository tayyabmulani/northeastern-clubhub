import express from "express";
import * as eventController from "../controllers/RSVPController.js";

const router = express.Router();

// Route to create a new event
router.post('/', eventController.createEvent);

// Route to RSVP to an event
router.post('/:eventId/rsvp', eventController.rsvpToEvent);

// Route to get reminders for an event
router.get('/:eventId/reminders', eventController.getEventReminders);

export default router;
