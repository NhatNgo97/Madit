const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const router = require("./routes/index");

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("MongoDB Connected");
});

app.listen(8000, () => {
  console.log("Server is Running");
});

app.use("", router);
