import React, { useState } from "react";
import EventForm from "../components/EventForm";
import { EventData } from "../models/Types";
import "./MainEvents.css";

const MainEvents: React.FC = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleCreateClick = () => {
        setIsFormVisible(true);
    };

    const handleEventSubmit = async (eventData: EventData) => {
        try {
          const formData = new FormData();
      
          // Append all fields to the FormData object
          Object.entries(eventData).forEach(([key, value]) => {
            if (key === "event_image" && value) {
              // Use "image" as the key for the file to match Multer's configuration
              formData.append("image", value);
            } else {
              formData.append(key, value as string);
            }
          });
      
          // Make the API request
          const response = await fetch("http://localhost:3002/api/club-admin/events", {
            method: "POST",
            body: formData,
          });
      
          if (response.ok) {
            const result = await response.json();
            console.log("Event created successfully:", result);
          } else {
            console.error("Failed to create event:", await response.text());
          }
        } catch (error) {
          console.error("Error submitting event:", error);
        }

        setIsFormVisible(false);
    };

  return (
    <div className="main-events-container">
      <button className="create-button" onClick={handleCreateClick}>
        Create Event
      </button>
      {isFormVisible && (
        <EventForm
          onSubmit={handleEventSubmit} // Pass the handler with EventData
          onClose={() => setIsFormVisible(false)}
        />
      )}
    </div>
  );
};

export default MainEvents;
