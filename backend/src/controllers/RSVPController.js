const eventService = require('../services/RSVPService.js');

const rsvpToEvent = async (req, res) => {
    try {
        const { eventId } = req.params;
        const { studentId } = req.body;
        const response = await eventService.rsvpToEvent(eventId, studentId);
        res.status(201).json(response);
    } catch (err) {
        res.status(err.message === 'Event not found' ? 404 : 500).json({ error: err.message });
    }
};

const getEventReminders = async (req, res) => {
    try {
        const { eventId } = req.params;
        const reminders = await eventService.getEventReminders(eventId);
        res.status(200).json(reminders);
    } catch (err) {
        res.status(err.message === 'Event not found' ? 404 : 500).json({ error: err.message });
    }
};

module.exports = { rsvpToEvent, getEventReminders };
