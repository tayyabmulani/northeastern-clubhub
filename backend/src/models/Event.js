import mongoose from "mongoose";
//creating a schema for bookinge event
//represents booking made by a user
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
}, { timestamps: true });//automatically includes createdAt and updatedAt fields

const EventModel = mongoose.model('event', eventSchema);
export default EventModel;