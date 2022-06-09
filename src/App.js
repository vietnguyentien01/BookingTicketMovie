import React, { lazy, Suspense } from "react";
import { createBrowserHistory } from "history";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate.js";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Profile from "./pages/Profile/Profile";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home}></HomeTemplate>
        <HomeTemplate path="/home" exact Component={Home}></HomeTemplate>
        <HomeTemplate path="/contact" exact Component={Contact}></HomeTemplate>
        <HomeTemplate path="/news" exact Component={News}></HomeTemplate>
        <HomeTemplate
          path="/detail/:id"
          exact
          Component={Detail}
        ></HomeTemplate>
        <CheckoutTemplate
          path="/checkout/:id"
          exact
          Component={Checkout}
        ></CheckoutTemplate>
        <UserTemplate path="/login" exact Component={Login}></UserTemplate>
        <HomeTemplate
          path="/register"
          exact
          component={Register}
        ></HomeTemplate>
        <HomeTemplate path="/profile" exact component={Profile}></HomeTemplate>
      </Switch>
    </Router>
  );
}

export default App;
