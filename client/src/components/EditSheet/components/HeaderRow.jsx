import React from 'react';
import SheetInput from '../../Shared/SheetInput/SheetInput';

const HeaderRow = ({ headerRowData }) => {
	return (
		<tr className='edit-sheet-row'>
			{Array(26)
				.fill('a')
				.map((el, i) => (
					<td className='edit-sheet-header_el'>
						{headerRowData[i] ? (
							<SheetInput value={headerRowData[i]} />
						) : (
							<SheetInput />
						)}
					</td>
				))}
		</tr>
	);
};

export default HeaderRow;
