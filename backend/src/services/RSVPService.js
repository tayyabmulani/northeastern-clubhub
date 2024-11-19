import {RSVPEventModel} from "../models/RSVP.js";

export const createEvent = async (eventData) => {
    // Create a new instance of the event model
    const newEvent = new RSVPEventModel(eventData);
    
    // Save the event to the database
    await newEvent.save();

    return newEvent; // Return the created event
};