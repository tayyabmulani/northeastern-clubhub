import dotenv from "dotenv";
import express from "express";
import initialize from "./src/app.js";
// load envionment variables
dotenv.config();
//create an Epress application instance
const app = express();
const port = process.env.PORT;
// initialize the application
initialize(app);
app.listen(port, () => {
    console.log(`Listenting to port ${port}`);
});