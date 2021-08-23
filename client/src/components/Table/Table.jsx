import React from 'react';
import './Table.css';

const Table = ({ Data }) => {
		if (Data.length > 0)
			return (
				<div className='table-main customize-scrollbar'>
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
				</div>
			);
		else return <></>;
};

export default Table;
