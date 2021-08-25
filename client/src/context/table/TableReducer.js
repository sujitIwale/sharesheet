import { SET_MODAL_OPEN, SET_SORT_BY, SET_TABLE_DATA } from '../types';

const TableReducer = (state, action) => {
	switch (action.type) {
		case SET_MODAL_OPEN:
			return {
				...state,
				modalOpen: !state.modalOpen,
			};
		case SET_TABLE_DATA:
			return {
				...state,
				tableData: action.payload,
			};
		case SET_SORT_BY:
			return {
				...state,
				sortBy: {
					ASC: !state.sortBy.ASC,
					item: action.payload,
				},
			};
		default:
			return state;
	}
};

export default TableReducer;
