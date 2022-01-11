import React, { useContext } from 'react';
import FileContext from '../../context/file/FileContext';
import Loading from '../Shared/Loading/Loading';
import Skeleton from '../Skeleton/Skeleton';
import './Table.css';

const Table = ({ sheetData, sortData, sortBy, setSortBy, loading }) => {
	console.log(sortBy);
	// const fileContext = useContext(FileContext);
	// const { sheetData, sortData, sortBy, setSortBy, loading } = ;
	if (loading) return <Skeleton type='table' />;
	if (sheetData.length > 0)
		return (
			<div className='table-main customize-scrollbar'>
				<table className='rwd-table'>
					<tr key='header' className='table-header'>
						<th key='1'>
							Sr.No.
							{sortBy.item === 'Sr.No.' && (
								<i className='fas fa-arrow-up'></i>
							)}
						</th>
						{Object.keys(sheetData[0]).map((header, key) => (
							<th
								className='pointer'
								onClick={() => {
									setSortBy(header);
									sortData(sheetData, header);
								}}
								key={++key}>
								{header}
								{sortBy.item === header && sortBy.ASC && (
									<i className='fas fa-arrow-up sort-arrow'></i>
								)}
								{sortBy.item === header && !sortBy.ASC && (
									<i className='fas fa-arrow-down sort-arrow'></i>
								)}
							</th>
						))}
					</tr>
					<tbody>
						{sheetData.map((row, i) => {
							return (
								<tr key={i}>
									<td
										key={i * Math.random()}
										data-th='Sr.No.'>
										{++i}
									</td>
									{Object.keys(row).map((header, j) => (
										<td key={j} data-th={header}>
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
