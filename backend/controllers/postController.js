const Post = require("../models/posts");

const postController = {
  getPost: async (req, res) => {},
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
