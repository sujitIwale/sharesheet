import React, { useReducer } from 'react';
import { apiRequest } from '../../utils/apiRequests';
import {
	SET_MODAL_OPEN,
	SET_SORT_BY,
	SET_FILE_DATA,
	SET_FILE_TYPE,
	SET_ERROR,
} from '../types';
import FileContext from './FileContext';
import FileReducer from './FileReducer';

const FileState = (props) => {
	const initialState = {
		FileData: [],
		fileType: null,
		sortBy: {
			ASC: true,
			item: 'Sr.No.',
		},
		modalOpen: false,
		error: null,
	};

	const [state, dispatch] = useReducer(FileReducer, initialState);
	const setModalOpen = () => {
		dispatch({ type: SET_MODAL_OPEN });
	};
	const setError = (error) => {
		dispatch({ type: SET_ERROR, payload: error });
		setTimeout(() => {
			dispatch({ type: SET_ERROR, payload: null });
		}, 2000);
	};

	const sendFileData = (data) => {
		apiRequest('/upload/csv?headers=true', data).then((res) => {
			if (res && res.status === 'success') {
				setFileData(res.data);
			}
		});
	};

	const setFileType = (type) => {
		dispatch({ type: SET_FILE_TYPE, payload: type });
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
				fileType: state.fileType,
				sortBy: state.sortBy,
				error: state.error,
				setModalOpen,
				setError,
				sendFileData,
				setFileType,
				setFileData,
				sortData,
				setSortBy,
			}}>
			{props.children}
		</FileContext.Provider>
	);
};

export default FileState;
