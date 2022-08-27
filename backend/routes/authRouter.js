const express = require("express");
const authController = require("../controllers/authController");

const authRouter = express.Router();

//REGISTER
authRouter.post("/register", authController.register);

//LOGIN
authRouter.post("/login", authController.login);

//LOGOUT
authRouter.post("/logout", authController.logout);

module.exports = authRouter;
