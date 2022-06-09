import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { useAuth } from "../../hooks/auth";
import Auth from "./Auth";

const SignIn = () => {
  const [Submitted, setSubmitted] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  if (isAuth()) return <Redirect to='/' />;

  const inputChangeHandler = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const res = await signIn(User);
    if (res) {
      setTimeout(() => {
        history.push("/");
      }, 500);
    }
  };

  return (
    <Auth type='signin'>
      <form onSubmit={formSubmitHandler}>
        <div className='flex center form-title'>
          <span>
            Sign In to <span className='website-name'>ShareSheet</span>
          </span>
        </div>
        <label>Email</label>
        <input type='text' name='email' onChange={inputChangeHandler} />
        <label>Password</label>
        <div className='password-container'>
          <input
            type='password'
            name='password'
            onChange={inputChangeHandler}
          />
        </div>
        <div className='auth-btn-container'>
          <button className="btn btn-primary" type='submit' disabled={Submitted}>
            Sign In
          </button>
        </div>
      </form>
    </Auth>
  );
};

export default SignIn;
