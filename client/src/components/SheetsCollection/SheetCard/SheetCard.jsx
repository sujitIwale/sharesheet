import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './SheetCard.css';

const SheetCard = ({ sheet, index }) => {
	return (
		<Link to={`/sheet/${sheet.id}`}>
			<div className='sheet-card'>
				<div>
					<h2>{index}</h2>
				</div>
				<div>
					<h2>{sheet.name}</h2>
				</div>
				<div>
					<h2>{sheet.owner}</h2>
				</div>
				<div>
					<i className='fas fa-ellipsis-v'></i>
				</div>
			</div>
		</Link>
	);
};

export default SheetCard;
