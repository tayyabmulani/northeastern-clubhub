import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainEvents from "./pages/MainEvents"; // Import your MainEvents page
import EventForm from "./components/EventForm"; // Import your EventForm component
import { EventData } from "./models/Types";

const App: React.FC = () => {
  const handleEventSubmit = (eventData: EventData) => {
    console.log("Event Submitted:", eventData);
    // Add your logic here to process the submitted event data
  };

  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<MainEvents />} />
        <Route
          path="/create-event"
          element={<EventForm onSubmit={handleEventSubmit} />}
        />
      </Routes>
    </Router>
  );
};

export default App;