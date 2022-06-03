const express = require("express");

const ServiceController = require("../Controllers/ServiceController");

const router = express.Router();

router.post("/create", ServiceController.addService);
router.get("/getById/:id", ServiceController.getServiceById);
router.get("/getAll", ServiceController.getAllServices);
router.delete("/deleteById/:id", ServiceController.deleteService);
router.patch("/updateById/:id", ServiceController.updateService);

module.exports = router;
