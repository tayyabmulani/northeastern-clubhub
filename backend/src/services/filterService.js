import Event from "../models/Event.js";

export const searchEvents = async (filters) => {
  const query = Event.find({ name: filters.name });

  // Execute the query and retrieve the matching events
  const events = await Event.find(query).sort({ date: 1 });

  console.log("Query Result from MongoDB:", events); // Log the actual result

  return events; // Return the result

};

