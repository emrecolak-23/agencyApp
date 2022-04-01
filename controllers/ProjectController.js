//Import Packages
const fs = require('fs');
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
      link: req.body.link,
    });

    req.flash('success', `${project.name} has been successfully created`);
    res.status(201).redirect('/');
  } catch (error) {
    req.flash('error', 'Project has not been successfully created!');
    res.status(400).redirect('/');
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
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        description: req.body.description,
      }
    );
    project.save();
    res.status(201).redirect('/');
  } catch (error) {
    res.status(400).json({
      status: 'Project not updated successfully',
      error,
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });

    let deletedImage = __dirname + '/../uploads/' + project.image;
    fs.unlinkSync(deletedImage);

    await Project.findByIdAndDelete({ _id: req.params.id });

    res.status(200).redirect('/');
  } catch (error) {
    res.status(400).json({
      status: 'Project not successfully deleted',
    });
  }
};
