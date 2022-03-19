import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='header-content base-layout'>
				<li>
					<Link to='/'>
						<h3 className='logo-text'>File Upload</h3>
					</Link>
				</li>
				<div>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</div>
			</div>
		</div>
	);
};

export default Header;
