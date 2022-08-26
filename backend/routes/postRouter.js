const express = require("express");
const postController = require("../controllers/postController");

const postRouter = express.Router();

//ADD A POST
postRouter.post("/", postController.CreateAPost);

//GET ALL POST
postRouter.get("/", postController.getPost);

//DELETE A POST
postRouter.delete("/:id", postController.deleteAPost);

//EDIT A POST
postRouter.put("/:id", postController.EditAPost);

//UPVOTE A POST
postRouter.post("/:id", postController.upVoteAPost);

//DOWNVOTE A POST
postRouter.post("/:id", postController.downVoteAPost);

module.exports = postRouter;
