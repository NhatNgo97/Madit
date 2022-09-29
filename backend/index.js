const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const router = require("./routes/index");
const cookieParser = require("cookie-parser");

const app = express();

dotenv.config();

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors(corsOptions));
app.use(morgan("common"));
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("MongoDB Connected");
});

app.listen(8000, () => {
  console.log("Server is Running");
});

//ROUTES
app.use("/v1", router);
