import * as rsvpService from "../services/RSVPService.js";

// Controller to create a new RSVP event
export const createEvent = async (req, res) => {
    try {
        // Get event data from the request body
        const eventData = req.body;

        // Call the service to create the event
        const newEvent = await rsvpService.createEvent(eventData);

        // Respond with the created event
        res.status(201).json(newEvent);
    } catch (err) {
        // Handle errors
        res.status(500).json({ error: err.message });
    }
};
