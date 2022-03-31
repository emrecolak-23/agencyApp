// Import Models
const Category = require('../models/Category');
const Project = require('../models/Project');
const Client = require('../models/Client');

exports.getHomePage = async (req, res) => {
  const projects = await Project.find()
    .sort('-createdAt')
    .populate('category')
    .populate('client');

  res.status(200).render('index', {
    projects,
  });
};

exports.getAddPage = async (req, res) => {
  const categories = await Category.find();
  const clients = await Client.find();

  res.status(200).render('add', {
    categories,
    clients,
  });
};

exports.getServicePage = (req, res) => {
  res.status(200).render('services');
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about');
};

exports.getTeamPage = (req, res) => {
  res.status(200).render('team');
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact');
};
