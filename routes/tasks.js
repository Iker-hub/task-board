const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Get all the tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create a task
router.post("/", async (req, res) => {
  const task = new Task({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get a specific task
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a specific task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.remove({ _id: req.params.id });
    res.json(task);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a specific task
router.patch("/:id", async (req, res) => {
  try {
    const task = await Task.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title, content: req.body.content } }
    );
    res.json(task);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
