import React from 'react'
import Auth from './Auth'

const SignIn = () => {
  return (
    <Auth type='signin'>
        <form>
          <label>Email</label>
          <input type='text' />
          <label>Password</label>
          <div class="password-container">
            <span class="forgot-pass">Forgot Password?</span>
            <input type='password' />
          </div>
          <button>Sign In</button>
        </form>
    </Auth>
  )
}

export default SignIn