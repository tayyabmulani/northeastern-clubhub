import * as eventService from '../services/eventService.js';
import { setSuccess, setError } from '../utils/response-handler.js';

export const post = async (req, res) => {
    try {
        const newEvent = {...req.body};
        const event = await eventService.createEvent(newEvent);
        setSuccess(event, res);
    } catch (err) {
        console.error('Error creating event:', err);
        setError(err, res);
    }
}
