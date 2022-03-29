// Import packages
const express = require("express");

// Import Controller
const PageController = require("../controllers/PageController")

const router = express.Router();

router.route("/").get(PageController.getHomePage)

module.exports = router