import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "../../util/setting";

const CheckoutTemplate = (props) => {
  //path, exact, component
  const { Component, ...propsRoute } = props;

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <Route
      {...propsRoute}
      render={(propsRoute) => {
        //props.location, props.history ,props.match
        return (
          <Fragment>
            <Component {...propsRoute}></Component>
          </Fragment>
        );
      }}
    ></Route>
  );
};

export default CheckoutTemplate;
