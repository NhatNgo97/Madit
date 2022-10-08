const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();

//REGISTER
userRouter.get("/me", userController.fetchMe);

module.exports = userRouter;
