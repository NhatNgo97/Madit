import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.response.use(
  function (response) {
    console.log("asdas");
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      console.log("vai lon");
    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
