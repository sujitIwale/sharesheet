import React, { Fragment, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { useAuth } from "../../hooks/auth";
import Logo from "../shared/Logo/Logo";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const { token, loadUser, signOut } = useAuth();

  useEffect(() => {
    console.log("header");
    loadUser();
  }, [token]);

  const signOutClickHandler = () => {
    signOut();
    history.push("/about");
  };

  return (
    <header className="header-main">
      <Logo />
      <div className="header-right">
        {!isAuth() ? (
          <Fragment>
            <Link to="/signin">
              {" "}
              <button className="btn signin-btn pointer">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="btn signup-btn pointer">Sign Up</button>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            {
              <button
                className="btn signin-btn pointer"
                onClick={signOutClickHandler}
              >
                Save
              </button>
            }
            <span>{isAuth().name}</span>
            <button
              className="btn signin-btn pointer"
              onClick={signOutClickHandler}
            >
              Sign Out
            </button>
          </Fragment>
        )}
      </div>
    </header>
  );
};

export default Header;
