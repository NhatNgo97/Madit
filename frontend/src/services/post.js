import api from "./api";

const postService = {
  getAllPost({ accessToken }) {
    return api.get("/v1/post?limit=5&page=1", {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
  },
  getAPost: ({}) => {},
  createAPost: ({}) => {},
  editAPost: ({}) => {},
  deleteAPost: ({}) => {},
  upvoteAPost: ({}) => {},
  downvoteAPost: ({}) => {},
};

export default postService;
