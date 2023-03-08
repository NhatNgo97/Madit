const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "posts" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    content: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comments", commentSchema);
