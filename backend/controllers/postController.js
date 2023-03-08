const Post = require("../models/posts");

const postController = {
  //GET ALL POST
  getAllPost: async (req, res) => {
    try {
      console.log(res.paginatedResults);
      const results = await res.paginatedResults.results.populate({
        path: "user",
        select: "_id nickname avatar",
      });
      res.status(200).json({
        success: true,
        posts: { ...res.paginatedResults, results: results },
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  //GET A POST
  getAPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate({
        path: "user",
        select: "_id nickname avatar",
      });
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  //CREATE A POST
  CreateAPost: async (req, res) => {
    try {
      const newPost = await Post.create(req.body);
      res.status(200).json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE A POST
  deleteAPost: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: "Delete successfully",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Delete Unsuccessfully, Please try again",
      });
    }
  },

  //EDIT A POST
  EditAPost: async (req, res) => {
    try {
      const post = Post.findById(req.params.id);
      if (post.user === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json({
          success: true,
          message: "Post have been updated.",
        });
      } else {
        res.status(403).json({
          success: false,
          message: "You can only update your post",
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  },
  upVoteAPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const userId = req.body.userId;
      console.log(req.body.userId);
      if (post.upvotes.includes(userId)) {
        await post.updateOne({ $pull: { upvotes: userId } });
        return res.status(200).json({
          success: true,
          type: "unvote",
          message: "Un-Upvote successfully",
        });
      }
      if (post.downvotes.includes(userId)) {
        await post.updateOne({ $pull: { downvotes: userId } });
      }
      await post.updateOne({ $push: { upvotes: userId } });

      return res.status(200).json({
        success: true,
        type: "vote",
        message: "Upvote successfully",
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  },
  downVoteAPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const userId = req.body.userId;
      if (post.downvotes.includes(userId)) {
        await post.updateOne({ $pull: { downvotes: userId } });
        return res.status(200).json({
          success: true,
          type: "unvote",
          message: "Un-downvote successfully",
        });
      }
      if (post.upvotes.includes(userId)) {
        await post.updateOne({ $pull: { upvotes: userId } });
      }
      await post.updateOne({ $push: { downvotes: userId } });
      console.log(post);

      return res.status(200).json({
        success: true,
        type: "vote",
        message: "Downvote successfully",
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  },
  cancelVoteAPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      await post.updateOne({ $pull: { upvotes: req.params.id } });
      await post.updateOne({ $pull: { downvotes: req.params.id } });
      res.status(200).json({
        success: true,
        message: "Cancle vote successfully",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  },
};

module.exports = postController;
