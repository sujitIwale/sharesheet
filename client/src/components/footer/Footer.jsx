import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='flex flex-row gap-1'>
                <li className=''>Made with By  <i className="fa-solid fa-heart text-red"></i>  <a href='https://www.github.com/sujitIwale' target='_blanck'>Sujit Iwale</a></li>
                <li><a href='https://www.github.com/sujitIwale/shareSheet' target='_blanck'>Star on   <i className="fa-brands fa-github"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer