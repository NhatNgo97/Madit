const Post = require("../models/posts");

const postController = {
  //GET ALL POST
  getAllPost: async (req, res) => {
    try {
      res.status(200).json(res.paginatedResults);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  //GET A POST
  getAPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate("user");
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
        sucess: true,
        message: "Delete successfully",
      });
    } catch (err) {
      res.status(500).json({
        sucess: false,
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
          sucess: true,
          message: "Post have been updated.",
        });
      } else {
        res.status(403).json({
          sucess: false,
          message: "You can only update your post",
        });
      }
    } catch (err) {
      res.status(500).json({
        sucess: false,
        message: err.message,
      });
    }
  },
  upVoteAPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.upvotes.includes(req.params.id)) {
        return res.status(200).json({
          sucess: true,
          message: "Upvote successfully",
        });
      }
      if (post.downvotes.includes(req.params.id)) {
        await post.updateOne({ $pull: { downvotes: req.params.id } });
      }
      await post.updateOne({ $push: { upvotes: req.params.id } });
      console.log(post);

      return res.status(200).json({
        sucess: true,
        message: "Upvote successfully",
      });
    } catch (err) {
      return res.status(500).json({
        sucess: false,
        message: err.message,
      });
    }
  },
  downVoteAPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.downvotes.includes(req.params.id)) {
        return res.status(200).json({
          sucess: true,
          message: "Upvote successfully",
        });
      }
      if (post.upvotes.includes(req.params.id)) {
        await post.updateOne({ $pull: { upvotes: req.params.id } });
      }
      await post.updateOne({ $push: { downvotes: req.params.id } });
      console.log(post);

      return res.status(200).json({
        sucess: true,
        message: "Downvote successfully",
      });
    } catch (err) {
      return res.status(500).json({
        sucess: false,
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
        sucess: true,
        message: "Cancle vote successfully",
      });
    } catch (err) {
      res.status(500).json({
        sucess: false,
        message: err.message,
      });
    }
  },
};

module.exports = postController;
