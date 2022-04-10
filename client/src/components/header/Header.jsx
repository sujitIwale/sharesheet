import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header-main'>
        <div className='logo-container'>
            <img  src='https://assets.website-files.com/60188e265d13c5a7c8f7998b/6019f06013e5a48d2640b644_spreadsheet.com-logo.svg' alt='logo'/>
        </div>
        <div className='header-right'>
            <button className='btn signin-btn pointer'>Sign In</button>
            <button className='btn signup-btn pointer' >Sign Up</button>
        </div>
    </header>
  )
}

export default Header