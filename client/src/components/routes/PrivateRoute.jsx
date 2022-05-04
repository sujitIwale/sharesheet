import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuth } from "../../helpers/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log(isAuth());
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? <Component {...props} /> : <Redirect to="/about" />
      }
    />
  );
};

export default PrivateRoute;
