const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Tasks", TaskSchema);
