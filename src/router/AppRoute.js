import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AdminLayout from "../app/adminLayout/layout/AdminLayout";
import LoggedInRoutes from "./LoggedInRoutes";
import ProtectedRoute from "./ProtectedRoute";

const AppRoute = () => {
  return (
    <>
      <Router>
        <Switch>
          <ProtectedRoute redirectTo="/">
            {/* <UserProvider> */}
            <AdminLayout>
              <LoggedInRoutes />
            </AdminLayout>
            {/* </UserProvider> */}
          </ProtectedRoute>
        </Switch>
      </Router>
    </>
  );
};

export default AppRoute;
