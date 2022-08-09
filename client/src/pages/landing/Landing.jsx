import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import PrimaryButton from "../../components/shared/Buttons/PrimaryButton";
import { isAuth } from "../../helpers/auth";
import "./Landing.css";

const Landing = () => {
  useEffect(() => {
    document.title = "ShareSheet";
  }, []);
  if (isAuth()) return <Redirect to="/" />;

  return (
    <div className="landing-page">
      <section className="landing-page-container">
        <div className="flex center info">
          <div>
            <h1>
              Upload and Edit <span>Csv Files</span>
            </h1>
            <h3>Upload and Edit csv files and share with other users</h3>
            <div className="flex row landing-btns">
              <Link to="/signup">
                <PrimaryButton value="Get Started" />
              </Link>
              <Link to="/signin">
                {" "}
                <button className="btn btn-secondary signin-btn pointer">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="landing-img">
          <img src="landing.png" alt="landing" className="card-image" />
        </div>
      </section>
      <section className="details-section">
        <div className="details-header">
          <h3>See what you can do with ShareSheet</h3>
          <i className="fa-solid fa-arrow-down-long"></i>
        </div>
        <div className="feature-detail">
          <img
            src="/feature-upload.png"
            alt="feature-upload"
            className="card-image"
          />
          <h1>Upload A Csv File</h1>
        </div>
        <div className="feature-detail">
          <h1>Edit Data</h1>
          <img
            src="/feature-editdata.png"
            alt="feature-upload"
            className="card-image"
          />
        </div>
        <div className="feature-detail">
          <img
            src="/feature-share.png"
            alt="feature-upload"
            className="card-image"
          />
          <h1>Share With Other Users</h1>
        </div>
      </section>
    </div>
  );
};

export default Landing;
