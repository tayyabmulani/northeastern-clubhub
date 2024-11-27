import express from "express";
import * as eventController from "../controllers/eventController.js";

const router = express.Router();

// Route for creating a new event, with multer middleware
router.route("/")
    .post(eventController.upload.single("image"), eventController.post);

router.route("/:id")
    .get(eventController.getEventById);

export default router;