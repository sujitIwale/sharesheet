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
	const sortData = (Data, sortBy) => {
		const compare = (a, b) => {
			// console.log(SortHeader + 'sort');
			// if (a[SortHeader] > b[SortHeader]) return -1;
			// if (a[SortHeader] < b[SortHeader]) return 1;
			// return 0;

			return a[sortBy] - b[sortBy];
		};

		if (sortBy !== null) {
			Data.sort(compare);
		}
		dispatch({ type: SET_TABLE_DATA, payload: Data });
	};
	return (
		<TableContext.Provider
			value={{ tableData: state.tableData, setTableData, sortData }}>
			{props.children}
		</TableContext.Provider>
	);
};

export default TableState;
