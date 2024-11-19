import mongoose from "mongoose";

// Creating a schema for events
const reminderSchema = new mongoose.Schema({
    date: { 
        type: Date, 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    },
}, { _id: false }); // Prevents MongoDB from creating a separate ID for each reminder

const eventSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    attendees: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }], // List of users who RSVP'd
    reminders: [reminderSchema], // Array of reminders for the event
}, { timestamps: true }); // Automatically includes createdAt and updatedAt fields

// Creating a model for the schema
const EventModel = mongoose.model('Event', eventSchema);

export default EventModel;
