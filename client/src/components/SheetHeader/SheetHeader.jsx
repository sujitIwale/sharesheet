import React, { useEffect, useState } from "react";
import { useSheet } from "../../hooks/sheet";
import ShareButton from "../shared/Buttons/ShareButton";
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
        <div className="sheet-title-container">
          <i className="fa-solid fa-pen"></i>
          <input
            className='sheet-header-input'
            value={SheetName}
            onChange={onChangeHandler}
            onBlurCapture={() => updateSheetName(SheetName)}
          />
        </div>
      </div>
      <button className="btn" onClick={openChart}><i className="fa-solid fa-chart-line"></i></button>
      <div className="right-group">
        {user._id === sheetData.ownerId && (
          <>
            <button className='btn btn-secondary border-borderColor save-btn' onClick={updateSheetData}>
              Save
            </button>
            <ShareButton onClick={openModal} />
          </>
        )}
      </div>
    </div>
  );
};

export default SheetHeader;
