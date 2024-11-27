import * as eventService from '../services/eventService.js';
import { setSuccess, setError } from '../utils/response-handler.js';
import multer from 'multer';

// Configure Multer to store the image in memory
const storage = multer.memoryStorage();
export const upload = multer({ storage });

// Handles the creation of a new event
export const post = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        console.log("Uploaded File:", req.file); // This should log the uploaded image
    
        const newEvent = {
            ...req.body,
            createdBy: "64a7e9e4e9b8f3f2a1e5c4b8",
            event_image: req.file ? req.file.buffer : null, // Save the image buffer
        };
    
        const event = await eventService.createEvent(newEvent);
        setSuccess(event, res);
    } catch (err) {
        console.error("Error creating event:", err);
        setError(err, res);
    }
};

export const getEventById = async (req, res) => {
    try {
        const eventId = req.params.id; // Extract event ID from request parameters
        console.log(eventId);
        const event = await eventService.getEventById(eventId);
    
        if (!event) {
            return setError({ message: "Event not found" }, res, 404);
        }
    
        setSuccess(event, res);
    } catch (error) {
        console.error("Error fetching event details:", error);
        setError(error, res);
    }
};