import React from 'react';
import SheetInput from '../../Shared/SheetInput/SheetInput';

const SheetRow = ({ sheetRowValues }) => {
	const getRow = () => {
		return Array(26)
			.fill('a')
			.map((el, i) => {
				return (
					<td className='edit-sheet-header_el'>
						{sheetRowValues[i] ? (
							<SheetInput value={sheetRowValues[i]} />
						) : (
							<SheetInput />
						)}
					</td>
				);
			});
	};
	return <tr className='edit-sheet-row'>{getRow()}</tr>;
};

export default SheetRow;
