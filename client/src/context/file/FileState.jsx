import React, { useReducer } from 'react';
import { SET_MODAL_OPEN, SET_SORT_BY, SET_FILE_DATA } from '../types';
import FileContext from './FileContext';
import FileReducer from './FileReducer';

const FileState = (props) => {
	const initialState = {
		FileData: [],
		sortBy: {
			ASC: true,
			item: 'Sr.No.',
		},
		modalOpen: false,
	};

	const [state, dispatch] = useReducer(FileReducer, initialState);
	const setModalOpen = () => {
		dispatch({ type: SET_MODAL_OPEN });
	};
	const setFileData = (data) => {
		dispatch({ type: SET_FILE_DATA, payload: data });
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
		dispatch({ type: SET_FILE_DATA, payload: Data });
	};
	return (
		<FileContext.Provider
			value={{
				modalOpen: state.modalOpen,
				FileData: state.FileData,
				sortBy: state.sortBy,
				setModalOpen,
				setFileData,
				sortData,
				setSortBy,
			}}>
			{props.children}
		</FileContext.Provider>
	);
};

export default FileState;
