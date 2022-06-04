import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../admin/pages/Dashboard";
import Product from "../admin/pages/Product";
import User from "../admin/pages/User";
import InvalidPage from "../app/pages/InvalidPage";

const LoggedInRoutes = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/admin"
          render={() => <Redirect to="/admin/dashboard" />}
        />
        <Route
          exact
          path="/"
          render={() => <Redirect to="/admin/dashboard" />}
        />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/products" component={Product} />
        <Route exact path="/admin/users" component={User} />
        <Route path="*" component={InvalidPage} />
      </Switch>
    </div>
  );
};

export default LoggedInRoutes;
