import { useContext } from 'react';
import { FileContext } from '../context/file/FileState';

export const useFile= () => {
	const fileContext = useContext(FileContext)

	return fileContext
};
