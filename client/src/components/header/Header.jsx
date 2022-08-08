import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { useAuth } from "../../hooks/auth";
import PrimaryButton from "../shared/Buttons/PrimaryButton";
import Logo from "../shared/Logo/Logo";
import "./Header.css";

const Header = () => {
  const [ProfileOpen, setProfileOpen] = useState(false)
  const history = useHistory();
  const path = useLocation().pathname;
  const { loadUser, token, signOut } = useAuth();

  useEffect(() => {
    if (path.includes("sheet")) loadUser("sheet")
    else loadUser()

    return () => {
      setProfileOpen(false)
    }
    // eslint-disable-next-line
  }, [token]);

  const signOutClickHandler = () => {
    signOut();
    history.push("/landing");
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
            {/* <span>{isAuth().name}</span> */}
            {/* <button
              className='btn btn-secondary signin-btn pointer'
              onClick={signOutClickHandler}
            >
              Sign Out
            </button> */}
            <div className="profile-container">
              <span className="user-profile-icon" onClick={() => setProfileOpen(state => !state)}><i class="fa-solid fa-user"></i></span>
              {
                ProfileOpen && <ul className="profile-dropdown">
                  <li>{isAuth().name}</li>
                  <li>Notifications</li>
                  <li
                    onClick={signOutClickHandler}
                    className='flex row align-center gap-1'
                  ><span>Sign Out</span><i class="fa-solid fa-arrow-right-from-bracket"></i></li>
                </ul>
              }
            </div>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
