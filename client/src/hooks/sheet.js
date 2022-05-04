import { useContext } from 'react';
import { SheetContext } from '../context/sheet/SheetState';

export const useSheet= () => {
	const sheetContext = useContext(SheetContext)

	return sheetContext
};
