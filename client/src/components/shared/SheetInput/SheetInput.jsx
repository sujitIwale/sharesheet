import React, { useRef, useState } from "react";
import "./SheetInput.css";

const SheetInput = ({ rowIndex, columnIndex, value, onSheetDataChange }) => {
  const [Value, setValue] = useState(value ? value : "");
  const timer = useRef();

  const changeHandler = (e) => {
    setValue(e.target.value.trim());
    clearTimeout(timer.current);

    const v = e.target.value.trim();
    if (v === Value.trim()) {
      return;
    }
    timer.current = setTimeout(() => {
      if (typeof onSheetDataChange === "function") {
        onSheetDataChange(rowIndex, columnIndex, e.target.value);
      }
    }, 500);
  };

  // const changeFocus = useCallback(
  //   (e) => {
  //     let targetId;
  //     switch (e.key) {
  //       case "ArrowUp":
  //         targetId = `${rowIndex - 1}*${columnIndex}`;
  //         break;
  //       case "ArrowDown":
  //         targetId = `${rowIndex + 1}*${columnIndex}`;
  //         break;
  //       case "ArrowLeft":
  //         targetId = `${rowIndex}*${columnIndex - 1}`;
  //         break;
  //       case "ArrowRight":
  //         targetId = `${rowIndex}*${columnIndex + 1}`;
  //         break;

  //       default:
  //         break;
  //     }
  //     let el = document.getElementById(targetId);
  //     if (el) {
  //       el.focus();
  //     }
  //   },
  //   [rowIndex, columnIndex]
  // );
  return (
    <input
      type='text'
      id={`${rowIndex}*${columnIndex}`}
      className='sheet-input'
      value={Value}
      onChange={changeHandler}
    // onKeyDown={changeFocus}
    />
  );
};

export default SheetInput;
