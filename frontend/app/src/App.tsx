import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainEvents from "./pages/MainEvents";
import EventForm from "./components/EventForm";
import EventDetails from "./components/EventDetails"; // Import EventDetails page
import { EventData } from "./models/Types";
import GetEvents from "./components/GetEvents";
import EditEvents from "./components/EditEvents";

const App: React.FC = () => {
  const handleEventSubmit = (eventData: EventData) => {
    console.log("Event Submitted:", eventData);
    // Add your logic here to process the submitted event data
  };

  const handleFormClose = () => {
    console.log("Event form closed");
    // Add logic to handle form close
  };

  return (
    <Router>
      <Routes>
        {/* Home page showing list of events */}
        <Route path="/" element={<MainEvents />} />

        {/* Route for creating a new event */}
        <Route
          path="/create-event"
          element={<EventForm onSubmit={handleEventSubmit} onClose={handleFormClose} />}
        />

        {/* Route for displaying specific event details */}
        <Route path="/events/:eventId" element={<EventDetails />} />

        {/* Route for displaying my event details */}
        <Route path="/my-events" element={<GetEvents />} />

        {/* Route to edit my event details */}
        <Route path="/edit-my-event/:eventId" element={<EditEvents />} />
      </Routes>
    </Router>
  );
};

export default App;