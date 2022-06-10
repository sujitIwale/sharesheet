import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { useAuth } from "../../hooks/auth";
import Auth from "./Auth";
import SubmitButton from "./SubmitButton";

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
    setSubmitted(false)
    if (res) {
      history.push("/");
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
        <label className="text-dark">Email</label>
        <input type='text' name='email' className="bold" onChange={inputChangeHandler} />
        <label className="text-dark">Password</label>
        <div className='password-container'>
          <input
            className="bold"
            type='password'
            name='password'
            onChange={inputChangeHandler}
          />
        </div>
        <div className='auth-btn-container'>
          <SubmitButton Submitted={Submitted} />
        </div>
      </form>
    </Auth>
  );
};

export default SignIn;
