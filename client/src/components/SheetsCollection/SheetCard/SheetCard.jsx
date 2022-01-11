import React from 'react';
import './SheetCard.css';

const SheetCard = ({ sheet, index }) => {
	return (
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
	);
};

export default SheetCard;
