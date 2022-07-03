import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Brand from "../admin/pages/Brand";
import Color from "../admin/pages/Color";
import Dashboard from "../admin/pages/Dashboard";
import Order from "../admin/pages/Order";
import OrderDetail from "../admin/pages/OrderDetail";
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
        <Route exact path="/admin/brands" component={Brand} />
        <Route exact path="/admin/colors" component={Color} />
        <Route exact path="/admin/orders" component={Order} />
        <Route exact path="/admin/orders/:id" component={OrderDetail} />
        <Route path="*" component={InvalidPage} />
      </Switch>
    </div>
  );
};

export default LoggedInRoutes;
