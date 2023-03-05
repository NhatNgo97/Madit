const express = require("express");
const authRouter = require("./authRouter");
const commentRouter = require("./commentRouter");
const postRouter = require("./postRouter");
const userRouter = require("./userRouter");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Hello World");
});

//POST ROUTER
router.use("/post", postRouter);

//AUTH ROUTER
router.use("/auth", authRouter);

//USER ROUTER
router.use("/user", userRouter);

//COMMENT ROUTER
router.use("/comment", commentRouter);

module.exports = router;
