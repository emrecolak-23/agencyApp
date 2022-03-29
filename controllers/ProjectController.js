// Import Project Model
const Project = require("../models/Project");

exports.createProject = async (req,res) => {

  const project = Project.create(req.body);
  res.status(201).json(project);
}