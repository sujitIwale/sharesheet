import React, { useReducer } from 'react';
import { SET_MODAL_OPEN, SET_SORT_BY, SET_TABLE_DATA } from '../types';
import TableContext from './TableContext';
import TableReducer from './TableReducer';

const TableState = (props) => {
	const initialState = {
		tableData: [],
		sortBy: {
			ASC: true,
			item: 'Sr.No.',
		},
		modalOpen: false,
	};

	const [state, dispatch] = useReducer(TableReducer, initialState);
	const setModalOpen = () => {
		console.log(state.modalOpen);
		dispatch({ type: SET_MODAL_OPEN });
	};
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
				if (state.sortBy.ASC) return p - q;
				else return q - p;
			}
			let stringReturn = state.sortBy.ASC ? 1 : -1;
			p = String.prototype.toLowerCase.call(a[sortBy]);
			q = String.prototype.toLowerCase.call(b[sortBy]);
			if (p < q) return stringReturn;
			if (p > q) return -stringReturn;
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
				modalOpen: state.modalOpen,
				tableData: state.tableData,
				sortBy: state.sortBy,
				setModalOpen,
				setTableData,
				sortData,
				setSortBy,
			}}>
			{props.children}
		</TableContext.Provider>
	);
};

export default TableState;
