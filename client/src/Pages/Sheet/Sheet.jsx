import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSheetContext } from '../../hooks/sheet';
import Table from '../../components/Table/Table';

const Sheet = () => {
	const id = useParams().id;
	const { sheetData, fetchSheetData } = useSheetContext();

	useEffect(() => {
		fetchSheetData(id);
	}, [sheetData, fetchSheetData, id]);
	return <Table sheetData={sheetData} />;
};

export default Sheet;
