const express = require("express");

const ReservationController = require("./../Controllers/ReservationController");

const router = express.Router();

router.post("/addReservation", ReservationController.addReservation);
router.get("/getAll", ReservationController.getAllReservation);
router.get("/getById/:id", ReservationController.getById);
router.patch("/updateById/:id", ReservationController.updateById);
router.delete("/deleteById/:id", ReservationController.removeById);

module.exports = router;
