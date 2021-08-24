import { SET_SORT_BY, SET_TABLE_DATA } from '../types';

const TableReducer = (state, action) => {
	switch (action.type) {
		case SET_TABLE_DATA:
			return {
				...state,
				tableData: action.payload,
			};
		case SET_SORT_BY:
			return {
				...state,
				sortBy: action.payload,
			};
		default:
			return state;
	}
};

export default TableReducer;
