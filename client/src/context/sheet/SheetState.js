import { createContext, useReducer } from 'react';
import { SET_SHEET_DATA } from '../types';
import SheetReducer from './SheetReducer';

const SheetContext = createContext();

const SheetState = (props) => {
	const initialState = {
		sheetData: null,
	};

	const [state, dispatch] = useReducer(SheetReducer, initialState);
	const setSheetData = (data) => {
		dispatch({ type: SET_SHEET_DATA, payload: data });
	};
	const fetchSheetData = (id) => {
		// logic for fetching
		const data = [];
		setSheetData(data);
	};

	return (
		<SheetContext.Provider
			value={{
				sheetData: state.sheetData,
				fetchSheetData,
			}}>
			{props.children}
		</SheetContext.Provider>
	);
};

export { SheetContext, SheetState };
