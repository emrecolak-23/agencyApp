// Import Packages
const express = require("express");
const ejs = require("ejs");

// Import Routes
const PageRouter = require("./routes/PageRoute");

// Create express app
const app = express();

// Template Engine
app.set("view engine","ejs");

// middlewares
app.use(express.static("public"));


// Page Routes
app.use("/",PageRouter);


// Declare PORT
const PORT = 14000

// Listen Server
app.listen(PORT, () => {
  console.log(`Server listened in ${PORT} port`);
})