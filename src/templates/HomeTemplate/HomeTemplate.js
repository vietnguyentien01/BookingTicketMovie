import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

export const HomeTemplate = (props) => {
  //path, exact, component
  const { Component, ...propsRoute } = props;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Route
      {...propsRoute}
      render={(propsRoute) => {
        //props.location, props.history ,props.match
        return (
          <Fragment>
            <Header {...propsRoute}></Header>
            <Component {...propsRoute}></Component>
            <Footer {...propsRoute}></Footer>
          </Fragment>
        );
      }}
    ></Route>
  );
};
