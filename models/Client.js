// Import Packages
const mongoose = require("mongoose");
// Create Schema Object
const Schema = mongoose.Schema;

// Create Client Schema
const ClientSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },

});

// Create Client Model
const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;