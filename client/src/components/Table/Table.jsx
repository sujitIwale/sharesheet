import React, { useContext } from 'react';
import TableContext from '../../context/table/TableContext';
import './Table.css';

const Table = () => {
	const tableContext = useContext(TableContext);
	const { tableData, sortData, sortBy, setSortBy } = tableContext;

	console.log('table');
	if (tableData.length > 0)
		return (
			<div className='table-main customize-scrollbar'>
				<table className='rwd-table'>
					<tr key='header' className='table-header'>
						<th key='1'>
							Sr.No.
							{sortBy === 'Sr.No.' && (
								<i class='fas fa-arrow-up'></i>
							)}
						</th>
						{Object.keys(tableData[0]).map((header, key) => (
							<th
								className='pointer'
								onClick={() => {
									sortData(tableData, header);
									setSortBy(header);
								}}
								key={++key}>
								{header}
								{sortBy === header && (
									<i class='fas fa-arrow-up'></i>
								)}
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
