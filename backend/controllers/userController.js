const jwt = require("jsonwebtoken");
const User = require("../models/users");

const userController = {
  async fetchMe(req, res) {
    try {
      const usertoken = req.headers.authorization;
      const token = usertoken.split(" ")[1];
      const data = jwt.verify(token, process.env.JWT_ACCESS_KEY);
      const user = await User.findById(data.id).select("-password");
      res.status(200).json({
        success: true,
        user: user,
      });
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({
          success: false,
          statusCode: 401,
          message: "Invalid Token",
        });
      }
      res.status(500).json({
        success: false,
        statusCode: 500,
        message: err.message,
      });
    }
  },
};

module.exports = userController;
