import { createContext, useReducer } from 'react';
import { SET_LOADING, SET_SHEET_DATA, SET_SORT_BY } from '../types';
import { rawData } from './rawData';
import SheetReducer from './SheetReducer';

const SheetContext = createContext();
SheetContext.displayName = 'SheetContext';

const SheetState = (props) => {
	const initialState = {
		sheetData: [],
		sortBy: {
			ASC: true,
			item: 'Sr.No.',
		},
		loading: false,
	};

	const [state, dispatch] = useReducer(SheetReducer, initialState);
	const setSheetData = (data) => {
		dispatch({ type: SET_SHEET_DATA, payload: data });
	};

	const setLoading = () => {
		dispatch({ type: SET_LOADING });
	};

	const fetchSheetData = (id) => {
		// logic for fetching
		setLoading();
		const data = rawData;
		setSheetData(data);
		setLoading();
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
		setSheetData(Data);
	};
	return (
		<SheetContext.Provider
			value={{
				sheetData: state.sheetData,
				loading: state.loading,
				sortBy: state.sortBy,
				fetchSheetData,
				setSortBy,
				sortData,
				setLoading,
			}}>
			{props.children}
		</SheetContext.Provider>
	);
};

export { SheetContext, SheetState };
