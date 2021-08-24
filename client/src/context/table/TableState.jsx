import React, { useReducer } from 'react';
import { SET_TABLE_DATA } from '../types';
import TableContext from './TableContext';
import TableReducer from './TableReducer';

const TableState = (props) => {
	const initialState = {
		tableData: [],
	};

	const [state, dispatch] = useReducer(TableReducer, initialState);

	const setTableData = (data) => {
		dispatch({ type: SET_TABLE_DATA, payload: data });
	};

	return (
		<TableContext.Provider
			value={{ tableData: state.tableData, setTableData }}>
			{props.children}
		</TableContext.Provider>
	);
};

export default TableState;
