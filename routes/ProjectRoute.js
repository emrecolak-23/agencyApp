// Import Packages
const express = require("express");

// Create router
const router = express.Router()

// Import Controller
const ProjectController = require("../controllers/ProjectController");

// Project Route
router.route("/").post(ProjectController.createProject);

module.exports = router