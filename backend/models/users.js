const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: [6, "Must be at least 6 characters "],
      maxLength: [20, "Must be less than 20 characters"],
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validator: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Must be at at least 8 characters"],
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    },
    theme: {
      type: String,
      default: "light",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
