const { default: api } = require("./api");

const userService = {
  fetchMe({ token }) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return api.get("/v1/user/me", config);
  },
};

export default userService;
