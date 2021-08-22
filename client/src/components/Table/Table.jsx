import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../utils/apiEndPoints.js';
import './Table.css';

const Table = () => {
	const [Data, setData] = useState([]);
	function hey() {
		console.log('called');
	}
	useEffect(() => {
		hey();
		(async function () {
			const res = await axios.get(`${BASE_API_URL}`);
			setData(res.data);
		})();
	}, []);

	return (
		<div className='table-main'>
			{Data.length > 0 && (
				<table className='rwd-table'>
					<tr key='header' className='table-header'>
						<th key='1'>Sr.No.</th>
						{Object.keys(Data[0]).map((header, key) => (
							<th key={++key}>{header}</th>
						))}
					</tr>
					{Data.map((row, i) => {
						return (
							<tr key={i}>
								<td key={i} data-th='Sr.No.'>
									{++i}
								</td>
								{Object.keys(row).map((header) => (
									<td
										key={i * Math.random()}
										data-th={header}>
										{row[header]}
									</td>
								))}
							</tr>
						);
					})}
				</table>
			)}
		</div>
	);
};

export default Table;
