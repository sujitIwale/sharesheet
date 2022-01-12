import React from 'react';

const EditSheetRow = () => {
	return (
		<tr className='edit-sheet-row'>
			{Array(26)
				.fill('a')
				.map((el, i) => (
					<td className='edit-sheet-header_el'>
						<input className='edit-sheet-input' />
					</td>
				))}
		</tr>
	);
};

export default EditSheetRow;
