const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  nom: String,
});

const Service = mongoose.model("Services", serviceSchema);

module.exports = Service;
