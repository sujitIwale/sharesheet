import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'><div className='logo-container'>
      <img src='https://assets.website-files.com/60188e265d13c5a7c8f7998b/6019f06013e5a48d2640b644_spreadsheet.com-logo.svg' alt='logo' />
    </div></Link>
  )
}

export default Logo