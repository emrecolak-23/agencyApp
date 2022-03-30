// Import packages
const express = require("express");

// Import Controller
const ClientController = require("../controllers/ClientController");

// Create router
const router = express.Router();

router.route("/").post(ClientController.createClient);

module.exports = router