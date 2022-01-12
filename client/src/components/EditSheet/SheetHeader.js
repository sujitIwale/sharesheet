import React from 'react';
import './EditSheet.css';

const SheetHeader = () => {
	return (
		<tr className='edit-table-header'>
			{Array(26)
				.fill('a')
				.map((el, i) => (
					<th className='edit-table-header_el'>
						{String.fromCharCode(65 + i)}
					</th>
				))}
		</tr>
	);
};

export default SheetHeader;
