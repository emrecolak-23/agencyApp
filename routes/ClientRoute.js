// Import packages
const express = require("express");
const multer = require("multer");

// Import Controller
const ClientController = require("../controllers/ClientController");

// Create router
const router = express.Router();

// Multer Middlewares
let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + "/../uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});
let upload = multer({
  storage: storage,
}).single("image");


router.route("/").post(upload,ClientController.createClient);

module.exports = router