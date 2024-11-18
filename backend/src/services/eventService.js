import Event from '../models/Event.js';

export const createEvent = async (newEvent) => {
    const event = new Event(newEvent);
    await event.save();
    return event;
}
