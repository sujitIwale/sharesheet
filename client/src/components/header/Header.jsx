import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { useAuth } from "../../hooks/auth";
import PrimaryButton from "../shared/Buttons/PrimaryButton";
import Logo from "../shared/Logo/Logo";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const path = useLocation().pathname;
  const { loadUser, token, signOut } = useAuth();

  useEffect(() => {
    if (path.includes("sheet")) loadUser("sheet")
    else loadUser()
    // eslint-disable-next-line
  }, [token]);

  const signOutClickHandler = () => {
    signOut();
    history.push("/about");
  };

  return (
    <header className='header-main shadow'>
      <Logo />
      <div className='header-right'>
        {!isAuth() ? (
          <div className='flex row'>
            <Link to='/signin'>
              {" "}
              <button className='btn btn-secondary signin-btn pointer'>Sign In</button>
            </Link>
            <Link to='/signup'>
              <PrimaryButton value='Sign Up' />
            </Link>
          </div>
        ) : (
          <div className="flex row align-center">
            <span>{isAuth().name}</span>
            <button
              className='btn btn-secondary signin-btn pointer'
              onClick={signOutClickHandler}
            >
              Sign Out
            </button>
            {/* <span className="user-profile-icon"><i class="fa-solid fa-user"></i></span> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
