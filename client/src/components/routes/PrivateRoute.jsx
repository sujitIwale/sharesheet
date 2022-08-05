import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { isAuth } from "../../helpers/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading } = useAuth();

  if (loading) return <></>;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? <Component {...props} /> : <Redirect to='/about' />
      }
    />
  );
};

export default PrivateRoute;
