import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import Auth from "./Auth";

const SignIn = () => {
  console.log("signin");
  const [Submitted, setSubmitted] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const res = await signIn(User);
    if (res) {
      history.push("/");
    }
  };

  return (
    <Auth type='signin'>
      <form onSubmit={formSubmitHandler}>
        <label>Email</label>
        <input type='text' name='email' onChange={inputChangeHandler} />
        <label>Password</label>
        <div className='password-container'>
          <span className='forgot-pass'>Forgot Password?</span>
          <input
            type='password'
            name='password'
            onChange={inputChangeHandler}
          />
        </div>
        <button type='submit' disabled={Submitted}>
          Sign In
        </button>
      </form>
    </Auth>
  );
};

export default SignIn;
