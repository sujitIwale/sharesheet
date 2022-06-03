import React, { Fragment, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { useAuth } from "../../hooks/auth";
import Logo from "../shared/Logo/Logo";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const path = useLocation().pathname;
  const { loadUser, token, signOut } = useAuth();

  useEffect(() => {
    console.log("header");
    if (path.includes("sheet")) loadUser("sheet");
    // eslint-disable-next-line
  }, [token]);

  const signOutClickHandler = () => {
    signOut();
    history.push("/about");
  };

  return (
    <header className='header-main'>
      <Logo />
      <div className='header-right'>
        {!isAuth() ? (
          <div className='flex row'>
            <Link to='/signin'>
              {" "}
              <button className='btn signin-btn pointer'>Sign In</button>
            </Link>
            <Link to='/signup'>
              <button className='btn signup-btn pointer'>Sign Up</button>
            </Link>
          </div>
        ) : (
          <Fragment>
            <span>{isAuth().name}</span>
            <button
              className='btn signin-btn pointer'
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
