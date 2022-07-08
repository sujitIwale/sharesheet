import React, { useEffect, useState } from "react";
import { useSheet } from "../../hooks/sheet";
import "./SheetHeader.css";

const SheetHeader = ({ openModal, user, openChart }) => {

  const { sheetData, updateSheetData, updateSheetName } = useSheet();
  // console.log(sheetData);
  const [SheetName, setSheetName] = useState(
    sheetData && sheetData.name ? sheetData.name : ""
  );
  useEffect(() => {
    setSheetName(sheetData.name);
    document.title = sheetData.name;
  }, [sheetData]);

  const onChangeHandler = (e) => {
    setSheetName(e.target.value);
  };
  if (!user) return <></>;
  return (
    <div className='sheet-header'>
      <div className="flex row align-center left-group">
        <input
          className='sheet-header-input'
          value={SheetName}
          onChange={onChangeHandler}
          onBlurCapture={() => updateSheetName(SheetName)}
        />
        <button className="btn" onClick={openChart}><i className="fa-solid fa-chart-line"></i></button>
      </div>
      <div className="right-group">
        {user._id === sheetData.ownerId && (
          <>
            <button className='btn btn-secondary border-aqua save-btn' onClick={updateSheetData}>
              Save
            </button>
            <button className='btn btn-primary bg-green' onClick={openModal}>
              Share
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SheetHeader;
