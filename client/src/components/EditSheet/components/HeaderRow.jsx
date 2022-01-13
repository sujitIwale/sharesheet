import React from 'react';
import SheetInput from '../../Shared/SheetInput';

const HeaderRow = ({ headerRowData }) => {
	return (
		<tr>
			{headerRowData.map((val, i) => (
				<SheetInput value={val} />
			))}
		</tr>
	);
};

export default HeaderRow;
