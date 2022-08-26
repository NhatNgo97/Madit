const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const authController = {
  //REGISTER A NEW USER
  register: async (req, res) => {
    try {
      //Hashing password
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      //Create new user
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });

      //Save to DB
      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  //LOGIN IN AN EXISTING USER
  login: async (req, res) => {},
};

module.exports = authController;
