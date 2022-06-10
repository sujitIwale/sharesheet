import React from "react";
import { Link, Redirect } from "react-router-dom";
import PrimaryButton from "../../components/shared/Buttons/PrimaryButton";
import { isAuth } from "../../helpers/auth";
import "./Landing.css";

const Landing = () => {
  if (isAuth()) return <Redirect to='/' />;

  return (
    <div className='landing-page'>
      <div className='landing-page-container'>
        <div className='flex center info'>
          <div>
            <h1>Upload and Edit Csv Files </h1>
            <h3>Upload and Edit csv files and share with other users</h3>
            <div className='flex row landing-btns'>
              <Link to='/signup'>
                <PrimaryButton value='Get Started' />
              </Link>
              <Link to='/signin'>
                {" "}
                <button className='btn btn-secondary signin-btn pointer'>Sign In</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='landing-img'>
          <img src='landing.png' alt='landing' />
        </div>
      </div>
    </div>
  );
};

export default Landing;
