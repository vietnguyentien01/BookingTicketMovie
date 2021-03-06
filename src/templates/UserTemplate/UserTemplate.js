import { Fragment } from "react";
import { Route } from "react-router-dom";

const UserTemplate = (props) => {
  //path, exact, component
  const { Component, ...propsRoute } = props;

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

export default UserTemplate;
