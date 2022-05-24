import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AboutUs from "../app/mainDisplay/innerComponent/AboutUs";
import MainPage from "../app/mainDisplay/innerComponent/MainPage";
import ProductPage from "../app/mainDisplay/innerComponent/ProductPage";
import HomePage from "../app/mainDisplay/mainWebPages/HomePage";
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
            <Route exact path="/products" component={ProductPage} />
            <Route exact path="/search/:keyword" component={ProductPage} />
            <Route exact path="/color/:color" component={ProductPage} />
            <Route exact path="/brand/:brand" component={ProductPage} />
            <Route exact path="/price/:price" component={ProductPage} />
            <Route
              exact
              path="/products/keyword/:keyword/color/:color/brand/:brand/price/:price"
              component={ProductPage}
            />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
          </Home>
        </Switch>
      </Router>
    </div>
  );
};

export default UserRoute;
