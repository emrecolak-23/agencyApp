// Import packages
const mongoose = require("mongoose");

// Create Schema
const Schema = mongoose.Schema;

// Create Project Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// Create Project model
const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project