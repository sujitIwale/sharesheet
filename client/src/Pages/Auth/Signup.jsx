import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import Auth from './Auth'

const SignUp = () => {
  const { signUp } = useAuth()
  const history = useHistory()
  const [User, setUser] = useState({
    name:'',
    username:'',
    email:'',
    password:''
  })

  const inputChangeController = (e) => {
    setUser({...User,[e.target.name]:e.target.value})
  }

  const formSubmitHandler = async(e) => {
    e.preventDefault();
    const res = await signUp(User)
    if(res) {
       history.push('/')
    }
  }

  return (
    <Auth type='signup'>
        <form onSubmit={formSubmitHandler}>
          <label>Name</label>
          <input type='text' name='name' onChange={inputChangeController}/>
          <label>Username</label>
          <input type='text' name='username' onChange={inputChangeController}/>
          <label>Email</label>
          <input type='email' name='email' onChange={inputChangeController}/>
          <label>Password</label>
          <div className="password-container">
            <input type='password' name='password' onChange={inputChangeController}/>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
    </Auth>
  )
}

export default SignUp