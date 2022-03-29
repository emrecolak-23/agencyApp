// Import Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import Routes
const PageRouter = require("./routes/PageRoute");
const ProjectRouter = require("./routes/ProjectRoute");
// Create express app
const app = express();

// Template Engine
app.set("view engine","ejs");

// middlewares
app.use(express.static("public"));
app.use(express.static("uploads"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Page Routes
app.use("/",PageRouter);
app.use("/project",ProjectRouter);


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