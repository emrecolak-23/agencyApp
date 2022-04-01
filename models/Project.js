// Import packages
const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

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
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client"
  },
  link: {
    type: String
  },
  slug: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})


ProjectSchema.pre("validate", function(next){
  this.slug = slugify(this.name,{
    lower: true,
    strict: true
  });
  next();
})

// Create Project model
const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project