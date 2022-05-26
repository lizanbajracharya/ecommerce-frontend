import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "../app/mainDisplay/mainWebPages/HomePage";
import ProductsPage from "../app/mainDisplay/mainWebPages/ProductsPage";
import SingleProductPage from "../app/mainDisplay/mainWebPages/SingleProductPage";
import AboutPage from "../app/mainDisplay/mainWebPages/AboutPage";
import Home from "../app/mainDisplay/pages/Home";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";

const UserRoute = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Home>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/products/:id" component={SingleProductPage} />
            <Route exact path="/search/:keyword" component={ProductsPage} />
            <Route exact path="/color/:color" component={ProductsPage} />
            <Route exact path="/brand/:brand" component={ProductsPage} />
            <Route exact path="/price/:price" component={ProductsPage} />
            <Route exact path="/alphabetical/:alpha" component={ProductsPage} />
            <Route exact path="/newOld/:asc" component={ProductsPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
          </Home>
        </Switch>
      </Router>
    </div>
  );
};

export default UserRoute;
