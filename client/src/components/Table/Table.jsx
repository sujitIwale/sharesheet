import React, { useContext, useState } from 'react';
import TableContext from '../../context/table/TableContext';
import { sortData } from '../../helpers/sort';
import './Table.css';

const Table = () => {
	const tableContext = useContext(TableContext);
	const { tableData } = tableContext;
	// const onSort = (header) => {
	// 	Data = sortData(Data, header);
	// };
	console.log('table');
	if (tableData.length > 0)
		return (
			<div className='table-main customize-scrollbar'>
				<table className='rwd-table'>
					<tr key='header' className='table-header'>
						<th key='1'>Sr.No.</th>
						{Object.keys(tableData[0]).map((header, key) => (
							<th
								className='pointer'
								onClick={() => {
									sortData(tableData, header);
								}}
								key={++key}>
								{`${header} ${'hel' === header ? '->' : ''}`}
							</th>
						))}
					</tr>
					<tbody>
						{tableData.map((row, i) => {
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
					</tbody>
				</table>
			</div>
		);
	else return <></>;
};

export default Table;
