import React from 'react';

const EditSheetRowList = ({ sheetHeader, sheetRow }) => {
	return (
		<tr className='edit-sheet-row'>
			{Array(26)
				.fill('a')
				.map((el, i) => (
					<td className='edit-sheet-header_el'>
						{sheetHeader
							? sheetHeader.map((e) => e)
							: sheetRow.map((e) => e)}
					</td>
				))}
		</tr>
	);
};

export default EditSheetRowList;
