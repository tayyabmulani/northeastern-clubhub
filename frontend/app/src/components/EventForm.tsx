import React, { useState } from "react";
import { EventData } from "../models/Types";
import "./EventForm.css";

interface EventFormProps {
    onSubmit: (eventData: EventData) => void;
    onClose: () => void;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState<EventData>({
        name: "",
        description: "",
        date: "",
        time: "",
        location: "",
        event_mode: "online",
        event_image: null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData({ ...formData, event_image: e.target.files[0] });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        onSubmit(formData); // Pass form data to parent component
    };

    return (
        <div className="form-overlay">
            <div className="form-container">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h1>Create an Event</h1>
                <form onSubmit={handleSubmit} className="event-form">
                    <div className="form-group">
                        <label>Event Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Event Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Event Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Event Time:</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Event Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Event Mode:</label>
                        <select name="event_mode" onChange={handleChange}>
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Event Image:</label>
                        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
                    </div>
                    <button type="submit" className="submit-button">
                        Submit Event
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EventForm;