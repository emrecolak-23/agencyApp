// Import Packages
const express = require("express");

// Import Controller
const CategoryController = require("../controllers/CategoryController");

const router = express.Router();

router.route("/").get(CategoryController.getAllCategories);
router.route("/").post(CategoryController.createCategory);

module.exports = router