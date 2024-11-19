import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user-routes.js";

const initialize = async (app) => {
    // Connect to MongoDB
    await connectDB();

    // Middleware
    app.use(express.json()); // Parse JSON request bodies

    // Routes
    app.use("/api/users", userRoutes);

    // Base route
    app.get("/", (req, res) => {
        res.send("API is running...");
    });
};

export default initialize;
