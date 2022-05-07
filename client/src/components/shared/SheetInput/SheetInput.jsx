import React, { useRef, useState } from "react";
import "./SheetInput.css";

const SheetInput = ({ rowIndex, columnIndex, value, onSheetDataChange }) => {
  const [Value, setValue] = useState(value ? value : "");
  const timer = useRef();

  const changeHandler = (e) => {
    console.log(timer.current);
    clearTimeout(timer.current);
    setValue(e.target.value);
    timer.current = setTimeout(() => {
      if (typeof onSheetDataChange === "function") {
        onSheetDataChange(rowIndex, columnIndex, e.target.value);
      }
    }, 2000);
  };
  return (
    <input
      type='text'
      id={`${rowIndex}*${columnIndex}`}
      className='sheet-input'
      value={Value}
      onChange={changeHandler}
    />
  );
};

export default SheetInput;
