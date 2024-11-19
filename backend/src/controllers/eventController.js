import * as eventService from '../services/eventService.js';
import { setSuccess, setError } from '../utils/response-handler.js';
//Handles the creation of a new event
export const post = async (req, res) => {
    try {
        //extracts the booking data from the request body
        const newEvent = {...req.body};
        const event = await eventService.createEvent(newEvent);
        setSuccess(event, res);
    } catch (err) {
        //displays error creating event
        console.error('Error creating event:', err);
        setError(err, res);
    }
}
