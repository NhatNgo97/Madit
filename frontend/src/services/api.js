import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      console.log("error");
    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
