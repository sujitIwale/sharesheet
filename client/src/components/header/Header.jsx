import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../shared/Logo/Logo'
import './Header.css'

const Header = () => {
  return (
    <header className='header-main'>
        <Logo />
        <div className='header-right'>
            <Link to='/signin'> <button className='btn signin-btn pointer'>Sign In</button></Link>
            <Link to='/signup'><button className='btn signup-btn pointer' >Sign Up</button></Link>
        </div>
    </header>
  )
}

export default Header