import Event from '../models/Event.js';

// Creates a new event and saves it to the database
export const createEvent = async (newEvent) => {
    const event = new Event(newEvent); // Create a new instance
    await event.save(); // Save the event to the database
    return event;
};