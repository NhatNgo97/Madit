import api from "./api";

const postService = {
  getAllPost() {
    return api.get("/v1/post?limit=5&page=1");
  },
  getAPost: ({ postId, userId }) => {
    return api.get(`/v1/post/${postId}`);
  },
  createAPost: ({}) => {},
  editAPost: ({}) => {},
  deleteAPost: ({}) => {},
  upvoteAPost: ({ postId, userId }) => {
    return api.post(`/v1/post/upvote/${postId}`, {
      userId,
    });
  },
  downvoteAPost: ({ postId, userId }) => {
    return api.post(`/v1/post/downvote/${postId}`, {
      userId,
    });
  },
};

export default postService;
