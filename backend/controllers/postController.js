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
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  //CREATE A POST
  CreateAPost: async (req, res) => {
    try {
      console.log(req.body);
      const newPost = Post(req.body);
      const savePost = await newPost.save();
      res.status(200).json(savePost);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteAPost: async (req, res) => {},
  EditAPost: async (req, res) => {},
  upVoteAPost: async (req, res) => {},
  downVoteAPost: async (req, res) => {},
};

module.exports = postController;
