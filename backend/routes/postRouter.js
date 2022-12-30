const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const postController = require("../controllers/postController");
const Post = require("../models/posts");

const postRouter = express.Router();

//ADD A POST
postRouter.post(
  "/",
  middlewareController.verifyTokenAndUserPostAuthorization,
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
postRouter.post(
  "/upvote/:id",
  middlewareController.verifyToken,
  postController.upVoteAPost
);

//DOWNVOTE A POST
postRouter.post(
  "/downvote/:id",
  middlewareController.verifyToken,
  postController.downVoteAPost
);

//UNVOTE A POST
postRouter.post(
  "/unvote/:id",
  middlewareController.verifyToken,
  postController.cancelVoteAPost
);

module.exports = postRouter;
