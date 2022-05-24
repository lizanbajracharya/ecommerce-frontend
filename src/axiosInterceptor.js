import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
  },
});

//add token to all request
axiosInstance.interceptors.request.use(function (config) {
  config.headers["Access-Control-Allow-Origin"] = "*";
  config.headers["Access-Control-Allow-Credentials"] = "true";
  config.headers["Access-Control-Request-Method"] = "POST";
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
  if (loginInfo?.token) {
    config.headers["Authorization"] = "Bearer " + loginInfo?.token;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (
      (error.response &&
        error.response.data.message === "invalid_or_missing_token") ||
      (error.response && error.response.data.message === "user_disabled")
    ) {
      localStorage.removeItem("loginInfo");
      window.location.replace("/login");
    } else {
      return Promise.reject({
        message: "Some unusual error occured, please try again",
      });
    }
  }
);
