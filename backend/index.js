require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./config/database");
const PORT = process.env.PORT || 3001;

// Create Express app
const app = express();

// Middleware
app.use(express.json());

mongoose
  .connect(dbConfig.url, dbConfig.options)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

app.use(bodyParser.json());

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to Miragelancer! Next Gen AI powered Freelancing Platform For New Age.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});