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
import CartPage from "../app/mainDisplay/mainWebPages/CartPage";
import WishlistProduct from "../app/mainDisplay/mainWebPages/WishlistProduct";
import UserProfile from "../app/mainDisplay/mainWebPages/UserProfile";
import ShippingPage from "../app/mainDisplay/mainWebPages/ShippingPage";
import PaymentPage from "../app/mainDisplay/mainWebPages/PaymentPage";
import OrderItem from "../app/mainDisplay/mainWebPages/OrderItem";
import OrderList from "../app/mainDisplay/mainWebPages/OrderList";
import SingleOrderPage from "../app/mainDisplay/mainWebPages/SingleOrderPage";

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
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/wishlist" component={WishlistProduct} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/shipping" component={ShippingPage} />
            <Route exact path="/payment" component={PaymentPage} />
            <Route exact path="/order" component={OrderItem} />
            <Route exact path="/order/:id" component={SingleOrderPage} />
            <Route exact path="/orderlist" component={OrderList} />
          </Home>
        </Switch>
      </Router>
    </div>
  );
};

export default UserRoute;
