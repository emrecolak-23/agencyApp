

// Import Project Model
const Project = require("../models/Project");


exports.createProject = async (req,res) => {

  const project = await Project.create({
    name: req.body.name,
    description: req.body.description,
    image: req.file.filename,
    category: req.body.category,
    client: req.body.client
  });
  res.status(201).redirect("/");
}

exports.getAllProject = async (req,res) => {
  const projects = await Project.find()

  res.render("index", {
    projects: projects
  })
}