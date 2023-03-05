const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: {
      type: String,
    },
    upvotes: {
      type: Array,
      default: [],
    },
    downvotes: {
      type: Array,
      default: [],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("posts", postSchema);
