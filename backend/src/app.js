import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import connectDB from "./config/db.js";
import initializeRoutes from "./routes/index.js";

const initialize = async (app) => {
    // Connect to MongoDB
    await connectDB();

    // Middleware
    app.use(cors()); // Handle cross-origin requests
    app.use(express.json()); // Parse JSON request bodies
    app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

    // Initialize routes
    initializeRoutes(app);

    // Base route
    app.get("/", (req, res) => {
        res.send("API is running...");
    });
};

export default initialize;
