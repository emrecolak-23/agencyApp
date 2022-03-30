// Import packages
const express = require("express");

// Import Controller
const PageController = require("../controllers/PageController");
const ProjectController = require("../controllers/ProjectController");

const router = express.Router();

router.route("/add").get(PageController.getAddPage);
router.route("/").get(PageController.getHomePage);

module.exports = router