const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const authController = {
  //GENERATE ACCESS TOKEN
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_ACCESS_KEY,
      {
        expiresIn: "1d",
      }
    );
  },

  //GENERATE REFRESH TOKEN
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "30s" }
    );
  },

  //REQUEST REFRESH TOKEN
  requestRefreshToken: async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    try {
      if (!refreshToken) {
        return res.status(401).json({
          success: false,
          message: "You are not Authenticated.",
        });
      }
      const user = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY);
      const newAccessToken = authController.generateAccessToken(user);
      res.status(200).json({
        accessToken: newAccessToken,
      });
    } catch (err) {
      const user = jwt.decode(refreshToken, process.env.JWT_REFRESH_KEY);
      console.log(user);
      console.log("token expired");
      return res.json("token expire");
    }
  },

  //REGISTER A NEW USER
  register: async (req, res) => {
    try {
      //Hashing password
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      console.log(req.body);

      //Create new user
      const newUser = await User.create({
        nickname: req.body.nickname,
        email: req.body.email,
        password: hashed,
      });

      res.status(200).json({
        success: true,
        message: "Register successfully",
        user: newUser,
      });
    } catch (err) {
      if (err.name === "ValidationError")
        res.status(400).json({
          success: false,
          message: err.message,
        });
      else res.status(500).json({ success: false, message: err });
    }
  },

  //LOGIN IN AN EXISTING USER
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Email or Password is incorrect, Please try again",
        });
        return;
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      console.log(validPassword);
      if (!validPassword) {
        res.status(401).json({
          success: false,
          message: "Email or Password is incorrect, Please try again",
        });
        return;
      }
      const accessToken = authController.generateAccessToken(user);
      const refreshToken = authController.generateRefreshToken(user);

      //STORE REFRESH TOKEN IN COOKIE
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        path: "/",
        sameSite: "none",
      });

      res.status(200).json({
        success: true,
        accessToken: accessToken,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err,
      });
    }
  },

  //LOGOUT
  logout: async (req, res) => {
    try {
      //Clear cookies when user logs out
      res.clearCookie("refreshToken", { sameSite: "none", secure: true });
      res.status(200).json({
        success: true,
        message: "Logout successfully",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  },
};

module.exports = authController;
