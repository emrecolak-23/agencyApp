// Import Packages
const express = require("express");
const ejs = require("ejs");
// Create express app
const app = express();

// Template Engine
app.set("view engine","ejs");

// middlewares
app.use(express.static("public"));

// Page Routes
app.get("/", (req,res) => {
  res.render("index");
})


// Declare PORT
const PORT = 14000

// Listen Server
app.listen(PORT, () => {
  console.log(`Server listened in ${PORT} port`);
})