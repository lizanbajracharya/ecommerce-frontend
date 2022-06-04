import React, { useEffect } from "react";
import { useHistory, Redirect, Route } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({
  redirectTo,
  component: Component,
  role,
  ...rest
}) => {
  const history = useHistory();

  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));

  useEffect(() => {
    if (!loginInfo?.token) {
      localStorage.removeItem("loginInfo");
      history.push("/");
      toast.error("Cannot Access The Link");
    }
    // eslint-disable-next-line
  }, []);

  if (!loginInfo?.token) return <Redirect to={redirectTo} />;

  return <Route {...rest} />;
};

export default ProtectedRoute;
