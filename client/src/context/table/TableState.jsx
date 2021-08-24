import React, { useReducer } from 'react';
import { SET_SORT_BY, SET_TABLE_DATA } from '../types';
import TableContext from './TableContext';
import TableReducer from './TableReducer';

const TableState = (props) => {
	const initialState = {
		tableData: [],
		sortBy: 'Sr.No.',
	};

	const [state, dispatch] = useReducer(TableReducer, initialState);

	const setTableData = (data) => {
		dispatch({ type: SET_TABLE_DATA, payload: data });
	};
	const setSortBy = (value) => {
		dispatch({ type: SET_SORT_BY, payload: value });
	};
	const sortData = (Data, sortBy) => {
		const compare = (a, b) => {
			let p, q;

			p = Number(a[sortBy]);
			q = Number(b[sortBy]);
			if (!isNaN(p)) {
				return p - q;
			}

			p = String.prototype.toLowerCase.call(a[sortBy]);
			q = String.prototype.toLowerCase.call(b[sortBy]);
			if (p < q) return -1;
			if (p > q) return 1;
			return 0;
		};
		
		if (sortBy !== null) {
			Data.sort(compare);
		}
		dispatch({ type: SET_TABLE_DATA, payload: Data });
	};
	return (
		<TableContext.Provider
			value={{
				tableData: state.tableData,
				sortBy: state.sortBy,
				setTableData,
				sortData,
				setSortBy,
			}}>
			{props.children}
		</TableContext.Provider>
	);
};

export default TableState;
