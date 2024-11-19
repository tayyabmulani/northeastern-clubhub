import Event from '../models/Event.js';
//creates a new event and saves it to the database
export const createEvent = async (newEvent) => {
    const event = new Event(newEvent);//create a new instance
    await event.save();//save the event
    return event;
}
