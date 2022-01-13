import React, { Fragment, useEffect } from 'react';
import EditSheetRowList from '../../components/EditSheet/EditSheetRowList';
import SheetHeader from '../../components/EditSheet/SheetHeader';
import { useSheetContext } from '../../hooks/sheet';
import './Edit.css';

const Edit = () => {
	const { sheetData, fetchSheetData, loading } = useSheetContext();
	useEffect(() => {
		fetchSheetData();
	}, []);
	const header = [];
	
	return (
		<Fragment>
			{loading || sheetData.length <= 0 ? (
				<div>Loading ....</div>
			) : (
				<div className='edit-container'>
					<div className='edit-sheet'>
						<table className='edit-table'>
							<SheetHeader />
							<EditSheetRowList sheetData={sheetData} />
							{/* {Array(5)
								.fill(null)
								.map((val, i) => (
									<EditSheetRowList
										sheetRow={getSheetRow(i)}
									/>
								))} */}
						</table>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default Edit;