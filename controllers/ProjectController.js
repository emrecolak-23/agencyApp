

// Import Project Model
const Project = require("../models/Project");


exports.createProject = async (req,res) => {

  const project = await Project.create({
    name: req.body.name,
    description: req.body.description,
    image: req.file.filename
  });
  res.status(201).json(project);
}