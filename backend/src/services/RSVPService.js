const Event = require('../models/RSVP.js');

const rsvpToEvent = async (eventId, studentId) => {
    const event = await Event.findById(eventId);
    if (!event) throw new Error('Event not found');
    
    if (!event.attendees.includes(studentId)) {
        event.attendees.push(studentId);
        await event.save();
    }
    return { message: "RSVP successful for event." };
};

const getEventReminders = async (eventId) => {
    const event = await Event.findById(eventId);
    if (!event) throw new Error('Event not found');
    
    return { eventId: event._id, reminders: event.reminders };
};

module.exports = { rsvpToEvent, getEventReminders };
