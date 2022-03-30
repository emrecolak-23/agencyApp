// Import category model
const Category = require("../models/Category");

// Create Category Document in MongoDB
exports.createCategory = async (req,res) => {

  try {

    const category = await Category.create(req.body);

    res.status(201).json({
      status: "Category successfully created",
      category
    });

  } catch(error) {

    res.status(400).json({
      status: "Something went wrong",
      error
    });

  }

}
// Get Data from database
exports.getAllCategories = async (req,res) => {

  try {

    const categories =  await Category.find({});
    res.status(200).render("add", {
      categories
    })

  } catch(error) {

    res.status(400).json({
      status: "Something went wrong",
      error
    });

  }

}