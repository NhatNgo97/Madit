const express = require("express");
const postRouter = require("./postRouter");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Hello World");
});

router.use("/post", postRouter);

module.exports = router;
