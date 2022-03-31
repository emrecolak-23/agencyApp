// Import Packages
const express = require("express");
const multer = require("multer");
// Create router
const router = express.Router()

// Import Controller
const ProjectController = require("../controllers/ProjectController");

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


// Project Route
router.route("/").post(upload,ProjectController.createProject);
router.route("/").get(ProjectController.getAllProject);
router.route("/:id").put(ProjectController.updateProject);

module.exports = router