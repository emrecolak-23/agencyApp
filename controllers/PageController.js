// Import Models
const Category = require('../models/Category');
const Project = require('../models/Project');
const Client = require('../models/Client');

exports.getHomePage = async (req, res) => {

  const page = req.query.page || 1
  const projectPerPage = 3;
  const totalProject = await Project.find().countDocuments();

  // Get Project From Database
  const projects = await Project.find()
    .sort('-createdAt')
    .populate('category')
    .populate('client')
    .skip((page-1)*projectPerPage)
    .limit(projectPerPage)

  // Get Client from database
  const clients = await Client.find();

  res.status(200).render('index', {
    page_name: 'index',
    projects,
    clients,
    current: page,
    pages: Math.ceil(totalProject/projectPerPage)
  });
};

exports.getAddPage = async (req, res) => {
  // Get Categories from database
  const categories = await Category.find();
  // Get client from database
  const clients = await Client.find();

  res.status(200).render('add', {
    page_name: "add",
    categories,
    clients,
  });
};

exports.getEditPage = async (req, res) => {
  const project = await Project.findById({ _id: req.params.id });

  res.status(200).render('edit', {
    page_name: 'edit',
    project,
  });
};

exports.getServicePage = (req, res) => {
  res.status(200).render('services',{
    page_name: "services"
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about',{
    page_name: "about"
  });
};

exports.getTeamPage = (req, res) => {
  res.status(200).render('career', {
    page_name: "career"
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: "contact"
  });
};
