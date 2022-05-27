import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuth } from "../../helpers/auth";

const HiddenRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default HiddenRoute;
