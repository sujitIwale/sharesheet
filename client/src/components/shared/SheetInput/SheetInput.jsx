import { set } from "mongoose";
import React, { useState } from "react";
import "./SheetInput.css";

const SheetInput = ({
  rowIndex,
  columnIndex,
  attribute,
  value,
  onSheetDataChange,
}) => {
  const [Value, setValue] = useState(value ? value : "");

  const changeHandler = (e) => {
    setValue(e.target.value);
    if (typeof onSheetDataChange === "function") {
      setValue((v) => {
        onSheetDataChange(rowIndex, attribute, v);
        setValue(e.target.value);
      });
    }
  };
  return (
    <input
      type="text"
      id={`${rowIndex}*${columnIndex}`}
      className="sheet-input"
      value={Value}
      onChange={changeHandler}
    />
  );
};

export default SheetInput;
