import React, { useState } from "react";
import "./SheetInput.css";

const SheetInput = ({ rowIndex, columnIndex, value }) => {
  const [Value, setValue] = useState(value ? value : "");

  const changeHandler = (e) => {
    setValue(e.target.value);
    // onChange(rowIndex,)
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
