require("dotenv").config();

const express = require("express");
import mongoose from "mongoose";

const routes = require("./routes");
const connectToDatabase = require(".database");

connectToDatabase();

const appExp = express();
const port = 3333;

appExp.use(routes);

appExp.listen(port, () => {
    console.log(`Backend started at http://localhost:${port}`);
});

