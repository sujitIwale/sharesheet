import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='header-content base-layout'>
				<li>
					<h3 className='logo-text'>StockFolio</h3>
				</li>
				<li className='search-bar'>
					<input type='text' placeholder='Search' />
				</li>
				<div>
					<li>About</li>
				</div>
			</div>
		</div>
	);
};

export default Header;
