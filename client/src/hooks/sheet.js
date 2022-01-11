import { useContext } from 'react';
import { SheetContext } from '../context/sheet/SheetState';

export const useSheetContext = () => {
	return useContext(SheetContext);
};
