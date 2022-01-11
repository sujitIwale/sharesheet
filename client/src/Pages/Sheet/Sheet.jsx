import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSheetContext } from '../../hooks/sheet';
import Table from '../../components/Table/Table';
import './Sheet.css';

const Sheet = () => {
	const id = useParams().id;
	const { sheetData, fetchSheetData, sortData, sortBy, setSortBy, loading } =
		useSheetContext();

	console.log(sortBy);
	useEffect(() => {
		fetchSheetData(id);
	}, [id]);
	return (
		<div className='sheet-container'>
			<Table
				sheetData={sheetData}
				sortData={sortData}
				setSortBy={setSortBy}
				loading={loading}
				sortBy={sortBy}
			/>
		</div>
	);
};

export default Sheet;
