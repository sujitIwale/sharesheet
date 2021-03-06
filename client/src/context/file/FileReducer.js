import {
	SET_MODAL_OPEN,
	SET_SORT_BY,
	SET_FILE_DATA,
	SET_FILE_TYPE,
	SET_ERROR,
	SET_LOADING,
} from '../types';

const FileReducer = (state, action) => {
	switch (action.type) {
		case SET_MODAL_OPEN:
			return {
				...state,
				modalOpen: !state.modalOpen,
			};
		case SET_LOADING:
			return {
				...state,
				loading: !state.loading,
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case SET_FILE_TYPE:
			return {
				...state,
				fileType: action.payload,
			};
		case SET_FILE_DATA:
			return {
				...state,
				FileData: action.payload,
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

export default FileReducer;
