// Import Packages
const nodemailer = require("nodemailer");


// Import Models
const Category = require('../models/Category');
const Project = require('../models/Project');
const Client = require('../models/Client');

exports.getHomePage = async (req, res) => {
  const page = req.query.page || 1;
  const projectPerPage = 6;
  const totalProject = await Project.find().countDocuments();

  // Get Project From Database
  const projects = await Project.find()
    .sort('-createdAt')
    .populate('category')
    .populate('client')
    .skip((page - 1) * projectPerPage)
    .limit(projectPerPage);

  // Get Client from database
  const clients = await Client.find();

  res.status(200).render('index', {
    page_name: 'index',
    projects,
    clients,
    current: page,
    pages: Math.ceil(totalProject / projectPerPage),
  });
};

exports.getAddPage = async (req, res) => {
  try {
    // Get Categories from database
    const categories = await Category.find();
    // Get client from database
    const clients = await Client.find();

    res.status(200).render('add', {
      page_name: 'add',
      categories,
      clients,
    });
  } catch (error) {
    res.status.json({
      status: "Add page not loaded",
      error
    })
  }
};

exports.getEditPage = async (req, res) => {
  try {
    // get project from database by slug
    const project = await Project.findOne({ slug: req.params.slug });
    res.status(200).render('edit', {
      page_name: 'edit',
      project
    });
  } catch (error) {
    res.status(400).render('/', {
      status: 'Project not updated',
      error,
    });
  }
};

exports.getServicePage = (req, res) => {
  try {
    res.status(200).render('services', {
      page_name: 'services',
    });
  } catch (error) {
    res.status(400).json({
      status: 'Service page not loaded',
      error,
    });
  }
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getTeamPage = (req, res) => {
  res.status(200).render('career', {
    page_name: 'career',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.sendEmail = async (req, res) => {
  const outputMessage = `
  <h1>Message Details</h1>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
  </ul>
  <h1>Message</h1>
  <p>${req.body.message}</p>
  `

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "nodejs.app.test61@gmail.com", // generated ethereal user
      pass: "Emco3232", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Portfolio Contact Form 👻" <emre@gmail.com>', // sender address
    to: "colakkemre@gmail.com", // list of receivers
    subject: "Portfolio New Message ✔", // Subject line
    text: "Hello world?", // plain text body
    html: outputMessage, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.status(200).redirect("/contact")
};