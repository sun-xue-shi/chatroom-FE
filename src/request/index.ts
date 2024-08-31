import { message } from "antd";
import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3005/",
  timeout: 3000,
});

request.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("token");

  if (accessToken) {
    config.headers.authorization = "Bearer " + accessToken;
  }
  return config;
});

request.interceptors.response.use(
  (response) => {
    const newToken = response.headers["token"];
    if (newToken) {
      localStorage.setItem("token", newToken);
    }
    return response;
  },
  async (error) => {
    if (!error.response) {
      return Promise.reject(error);
    }
    const { data } = error.response;
    if (data.statusCode === 401) {
      message.error(data.message);

      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } else {
      return Promise.reject(error);
    }
  }
);
