const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const postController = require("../controllers/postController");
const Post = require("../models/posts");

const postRouter = express.Router();

//ADD A POST
postRouter.post(
  "/",
  middlewareController.verifyToken,
  postController.CreateAPost
);

//GET A POST
postRouter.get("/:id", postController.getAPost);

//GET ALL POST
postRouter.get(
  "/",
  middlewareController.paginatedResult(Post),
  postController.getAllPost
);

//DELETE A POST
postRouter.delete("/:id", postController.deleteAPost);

//EDIT A POST
postRouter.put("/:id", postController.EditAPost);

//UPVOTE A POST
postRouter.post("/:id", postController.upVoteAPost);

//DOWNVOTE A POST
postRouter.post("/:id", postController.downVoteAPost);

module.exports = postRouter;
