import api from "./api";

const commentService = {
  getAPostComments({ postId }) {
    return api.get(`/v1/comment/${postId}`);
  },
};
