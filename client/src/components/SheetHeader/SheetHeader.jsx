import React, { useEffect, useState } from "react";
import { useSheet } from "../../hooks/sheet";
import "./SheetHeader.css";

const SheetHeader = ({ openModal, user }) => {
  const { sheetData, updateSheetData, updateSheetName } = useSheet();
  // console.log(sheetData);
  const [SheetName, setSheetName] = useState(
    sheetData && sheetData.name ? sheetData.name : ""
  );
  useEffect(() => {
    setSheetName(sheetData.name);
  }, [sheetData]);

  const onChangeHandler = (e) => {
    setSheetName(e.target.value);
  };
  if (!user) return <></>;
  return (
    <div className='sheet-header'>
      <input
        className='sheet-header-input'
        value={SheetName}
        onChange={onChangeHandler}
        onBlurCapture={() => updateSheetName(SheetName)}
      />
      <div>
        {user._id === sheetData.ownerId && (
          <>
            <button className='btn save-btn' onClick={updateSheetData}>
              Save
            </button>
            <button className='btn share-btn' onClick={openModal}>
              Share
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SheetHeader;
