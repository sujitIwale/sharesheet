import { SET_TABLE_DATA } from '../types';

const TableReducer = (state, action) => {
	switch (action.type) {
		case SET_TABLE_DATA:
			return {
				...state,
				tableData: action.payload,
			};
		default:
			return state;
	}
};

export default TableReducer;
