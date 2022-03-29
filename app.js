// Import Packages
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

// Import Routes
const PageRouter = require("./routes/PageRoute");

// Create express app
const app = express();

// Template Engine
app.set("view engine","ejs");

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Page Routes
app.use("/",PageRouter);


// Connect DB
const dbURI =
  'mongodb+srv://emco:emco3232@nodetuts.iuulr.mongodb.net/agencyApp?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("database connected")
    // declare port number
    const PORT = process.env.PORT || 14000;
    // listen for request
    app.listen(PORT, ()=>{
      console.log("Server listened")
    });
  })
  .catch((err) => {
    console.log(err);
  });