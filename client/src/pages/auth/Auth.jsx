import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/shared/Logo/Logo'
import { useAuth } from '../../hooks/auth'
import './Auth.css'

const Auth = (props) => {
  const {authError} = useAuth()
  return (
    <div className='auth-page-main'>
      <Logo />
      {
        authError && <h4>{authError}</h4>
      }
      <div className="auth-card">
        {
          props.children
        }
        <div className='auth-card-footer'>
          <h5>{props.type === 'signup' ? 'Already have ' : `Don't have `} an account?<Link to={props.type === 'signup' ? '/signin' : '/signup'}> <span>Get started</span></Link></h5>
      </div>
      </div>
    </div>
  )
}

export default Auth