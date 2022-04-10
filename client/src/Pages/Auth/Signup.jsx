import React from 'react'
import Auth from './Auth'

const SignUp = () => {
  return (
    <Auth type='signup'>
        <form>
          <label>Name</label>
          <input type='text' />
          <label>username</label>
          <input type='text' />
          <label>Email</label>
          <input type='text' />
          <label>Password</label>
          <div class="password-container">
            <input type='password' />
          </div>
          <button>Sign Up</button>
        </form>
    </Auth>
  )
}

export default SignUp