const mongoose = require("mongoose");
const { isEmail } = require("validator");
var uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema(
  {
    nickname: {
      type: String,
      required: true,
      minLength: [6, "Must be at least 6 characters "],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Must be at at least 6 characters"],
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        default: [],
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        default: [],
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
    refreshTokens: [String],
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator, {
  message: "Error: This {PATH} has been used.",
});

module.exports = mongoose.model("users", userSchema);
