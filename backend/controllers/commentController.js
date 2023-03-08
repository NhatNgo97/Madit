const Comment = require("../models/comments");
const Post = require("../models/posts");
const User = require("../models/users");

const commentController = {
  addAComment: async (req, res) => {
    try {
      const user = await User.findById(req.body.user);
      const post = await Post.findById(req.params.id);
      const newComment = await Comment.create({
        post: post._id,
        user: user._id,
        content: req.body.content,
      });
      await post.updateOne({
        $push: { comment: newComment },
      });

      return res.status(200).json({
        success: true,
        comment: newComment,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err,
      });
    }
  },
  getPostComments: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate({
        path: "comments",
        populate: {
          path: "user",
          select: "_id nickname email avatar",
        },
      });
      const commentList = post.comments;
      return res.status(200).json({
        success: true,
        comments: commentList,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err,
      });
    }
  },
  getAllComments: async (req, res) => {},
  deleteComment: async (req, res) => {},
};

module.exports = commentController;
