const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  fullName: {
    type: String,
  },
  petBreed: {
    type: String,
  },
  phoneNum: Number,
  date: {
    type: Date,
    default: Date.now(),
  },
  availableTime: String,
  service: String,
  petName: String,
  petNumber: Number,
});

const Reservation = mongoose.model("Reservations", serviceSchema);

module.exports = Reservation;
