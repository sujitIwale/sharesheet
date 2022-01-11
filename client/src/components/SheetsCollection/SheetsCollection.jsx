import React from 'react';
import './SheetsCollection.css';
import SheetCard from './SheetCard/SheetCard';

const Sheets = ({ sheets }) => {
	return (
		<div className='sheets-collection-container'>
			<div className='sheets-collection'>
				<div className='sheets-collection-header'>
					<div>
						<h2>Index</h2>
					</div>
					<div>
						<h2>Name</h2>
					</div>
					<div>
						<h2>Owner</h2>
					</div>
				</div>
				{sheets.map((sheet, i) => (
					<SheetCard sheet={sheet} index={i + 1} />
				))}
			</div>
		</div>
	);
};

export default Sheets;
