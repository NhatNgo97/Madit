const express = require("express");
const commentController = require("../controllers/commentController");
const middlewareController = require("../controllers/middlewareController");
const postController = require("../controllers/postController");
const Post = require("../models/posts");

const commentRouter = express.Router();

commentRouter.post("/:id", commentController.addAComment);

//GET A COMMENT
commentRouter.get("/:id", commentController.getPostComments);

//GET ALL COMMENT
commentRouter.get("/", commentController.getAllComments);

//DELETE A POST
commentRouter.delete("/:id", commentController.deleteComment);

module.exports = commentRouter;
