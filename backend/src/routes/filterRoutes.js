import express from "express";
import * as filterController from "../controllers/filterController.js";

const router = express.Router();

router.route('/')
  .get(filterController.searchEvents);

export default router; // Use `export default` instead of `module.exports`


