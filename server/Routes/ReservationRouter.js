const express = require("express");

const ReservationController = require("./../Controllers/ReservationController");

const router = express.Router();

router.post("/addReservation", ReservationController.addReservation);
router.get("/getAll", ReservationController.getAllReservation);

module.exports = router;
