const express = require("express");

const authController = require("./../Controllers/UserController");

const router = express.Router();

router.post("/register", authController.signup);
router.post("/login", authController.login);
router.get("/getUserById/:id", authController.getUserData);
router.patch("/updateUser/:id", authController.updateProfile);
router.delete("/deleteUser/:id", authController.deleteAccount);
router.get("/getAllUsers", authController.getUsers);

module.exports = router;
