import api from "./api";

const authService = {
  login({ email, password }) {
    return api.post(
      "/v1/auth/login",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );
  },
  register({ nickname, email, password }) {
    return api.post("/v1/auth/register", {
      nickname: nickname,
      email: email,
      password: password,
    });
  },
  logout() {
    return api.post(
      "/v1/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );
  },
  requestRefreshToken() {
    return api.post(
      "v1/auth/refresh",
      {},
      {
        withCredentials: true,
      }
    );
  },
};

export default authService;
