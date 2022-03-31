// Import Project Model
const Project = require('../models/Project');

exports.createProject = async (req, res) => {

  try {

    const project = await Project.create({
      name: req.body.name,
      description: req.body.description,
      image: req.file.filename,
      category: req.body.category,
      client: req.body.client,
    });
    res.status(201).redirect('/');

  } catch(error) {

    res.status(400).json({
      status: "Project not created successfully",
      error
    })
  }
};

exports.getAllProject = async (req, res) => {
  const projects = await Project.find();

  res.render('index', {
    projects: projects,
  });
};

exports.updateProject = async (req, res) => {
  
  try {

    const project = await Project.findOneAndUpdate({_id: req.params.id },{
      name: req.body.name,
      description: req.body.description
    });
    project.save();
    res.status(201).redirect('/');

  } catch(error) {

    res.status(400).json({
      status: "Project not updated successfully",
      error
    })

  }
  
};