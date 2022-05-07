import React, { useEffect, useState } from "react";
import { useSheet } from "../../hooks/sheet";
import "./SheetHeader.css";

const SheetHeader = () => {
  const { sheetData, updateSheetData, updateSheetName } = useSheet();
  console.log(sheetData);
  const [SheetName, setSheetName] = useState(
    sheetData && sheetData.name ? sheetData.name : ""
  );
  useEffect(() => {
    setSheetName(sheetData.name);
  }, [sheetData]);

  const onChangeHandler = (e) => {
    setSheetName(e.target.value);
  };
  return (
    <div className='sheet-header'>
      <input
        className='sheet-header-input'
        value={SheetName}
        onChange={onChangeHandler}
        onBlurCapture={() => updateSheetName(SheetName)}
      />
      <div>
        <button className='btn save-btn' onClick={updateSheetData}>
          Save
        </button>
        <button className='btn share-btn'>Share</button>
      </div>
    </div>
  );
};

export default SheetHeader;
