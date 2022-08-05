import React from "react";
import { Link } from "react-router-dom";
import Alert from "../../components/shared/Alert/Alert";
import Logo from "../../components/shared/Logo/Logo";
import { useAuth } from "../../hooks/auth";
import "./Auth.css";

const Auth = (props) => {
  const { authError } = useAuth();

  return (
    <div className='auth-page-main'>
      <Logo />
      {authError && <Alert message={authError} type='danger' />}
      <div className='auth-card'>
        {props.children}
        <div className='auth-card-footer'>
          <h4>
            {props.type === "signup" ? "Already have " : `Don't have `} an
            account?
            <Link to={props.type === "signup" ? "/signin" : "/signup"}>
              {" "}
              <span className="text-blue bold">{props.type === "signup" ? "Sign In" : "Get started"}</span>
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Auth;
