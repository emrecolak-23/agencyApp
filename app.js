// Import Packages
const express = require("express");

// Create express app
const app = express();

// Page Routes
app.get("/", (req,res) => {
  res.send("emre çolak kral");
})


// Declare PORT
const PORT = 14000

// Listen Server
app.listen(PORT, () => {
  console.log(`Server listened in ${PORT} port`);
})