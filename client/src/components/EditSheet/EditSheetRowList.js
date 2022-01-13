import React, { Fragment } from 'react';
import HeaderRow from './components/HeaderRow';
import SheetRow from './components/SheetRow';

const EditSheetRowList = ({ sheetData }) => {
	const header = [];
	const getSheetHeaderValues = (index = 0) => {
		return Object.keys(sheetData[index]).map((key) => {
			header.push(key);
			return key;
		});
	};
	const getSheetRowValues = (i) => {
		if (!sheetData[i]) return [];
		console.log(Object.keys(sheetData[i]));
		return Object.keys(sheetData[i]).map((key) => {
			// console.log(sheetData[i][key]);
			return sheetData[i][key];
		});
	};
	return (
		<Fragment>
			<HeaderRow headerRowData={getSheetHeaderValues(0)} />
			{Array(100)
				.fill(null)
				.map((val, i) => {
					return (
						<SheetRow
							sheetData={sheetData}
							index={i}
							sheetRowValues={getSheetRowValues(i)}
						/>
					);
				})}
		</Fragment>
		// <tr className='edit-sheet-row'>
		// 	{Array(26)
		// 		.fill('a')
		// 		.map((el, i) => (
		// 			<td className='edit-sheet-header_el'>
		// 				{sheetHeader
		// 					? sheetHeader.map((e) => e)
		// 					: sheetRow.map((e) => e)}
		// 			</td>
		// 		))}
		// </tr>
	);
};

export default EditSheetRowList;
