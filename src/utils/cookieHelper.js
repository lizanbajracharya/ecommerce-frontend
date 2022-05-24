import Cookies from "js-cookie";

var CryptoJS = require("crypto-js");

const COOKIE_NAME = "ecommerce";

export const setUser = (data) => {
  Cookies.set(
    COOKIE_NAME,
    CryptoJS.AES.encrypt(
      JSON.stringify(data),
      process.env.REACT_APP_SECRET_KEY
    ),
    { expires: 3, secure: true }
  );
};

export const getUser = () => {
  const data = Cookies.get(COOKIE_NAME);
  if (data) {
    return JSON.parse(
      CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY).toString(
        CryptoJS.enc.Utf8
      )
    );
  }
  return {
    token: "",
    admin: "",
  };
};

export const removeUser = () => {
  Cookies.remove(COOKIE_NAME);
};
