const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/user.controller");
const { registerValidation, loginValidation } = require("../middlewares/user.middleware");

// Register
router.post("/register", registerValidation, registerUser);

// Login
router.post("/login", loginValidation, loginUser);

module.exports = router;
