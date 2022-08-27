const express = require("express");
const authRouter = require("./authRouter");
const postRouter = require("./postRouter");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Hello World");
});

//POST ROUTER
router.use("/post", postRouter);

//AUTH ROUTER
router.use("/auth", authRouter);

module.exports = router;
