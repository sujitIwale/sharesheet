import React from 'react';
import SheetInput from '../../Shared/SheetInput/SheetInput';

const SheetRow = ({ SheetRow }) => {
	return (
		<tr>
			{SheetRow.map((val, i) => (
				<td className='edit-sheet-header_el'>
					<SheetInput value={val} />
				</td>
			))}
		</tr>
	);
};

export default SheetRow;
