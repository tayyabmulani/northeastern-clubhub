import * as filterService from "../services/filterService.js";

export const searchEvents = async (req, res) => {
  try {
    const filters = {
      name: req.query.name,
      description: req.query.description,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
      location: req.query.location,
      createdBy: req.query.createdBy,
    };

    const events = await filterService.searchEvents(filters);

    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

