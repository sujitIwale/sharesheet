import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { isAuth } from "../../helpers/auth";
import LineLoader from "../shared/Loader/LineLoader";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading } = useAuth();

  
  
  if (loading) return <LineLoader />;
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
