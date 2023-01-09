const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const tasksRoutes = require("./routes/tasks");
app.use("/tasks", tasksRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to DB
mongoose.connect(
  "mongodb://admin:admin@localhost:1888/tasksdb?authMechanism=DEFAULT",
  () => {
    console.log("connect to DB!");
  }
);

// Start listening to the server
app.listen(3000);
