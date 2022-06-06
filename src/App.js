import React from "react";
import { createBrowserHistory } from "history";
import { Switch } from "react-router-dom";
import { Router } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home}></HomeTemplate>
        <HomeTemplate path="/home" exact Component={Home}></HomeTemplate>
        <HomeTemplate path="/login" exact Component={Login}></HomeTemplate>
        <HomeTemplate path="/contact" exact Component={Contact}></HomeTemplate>
        <HomeTemplate
          path="/detail/:id"
          exact
          Component={Detail}
        ></HomeTemplate>
        <HomeTemplate path="/news" exact Component={News}></HomeTemplate>
        <HomeTemplate
          path="/register"
          exact
          component={Register}
        ></HomeTemplate>
      </Switch>
    </Router>
  );
}

export default App;
