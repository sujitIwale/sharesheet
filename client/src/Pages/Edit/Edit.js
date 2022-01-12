import React from 'react';
import EditSheetRow from '../../components/EditSheet/EditSheetRow';
import SheetHeader from '../../components/EditSheet/SheetHeader';
import './Edit.css';

const Edit = () => {
	return (
		<div className='edit-container'>
			<div className='edit-sheet'>
				<table className='edit-table'>
					<SheetHeader />
					{Array(200).fill(<EditSheetRow />)}
				</table>
			</div>
		</div>
	);
};

export default Edit;
