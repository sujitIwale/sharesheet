import React from "react";
import SheetInput from "../shared/SheetInput/SheetInput";

const getRow = (
  rowIndex,
  columnIndex,
  dataArray,
  onSheetDataChange,
  attribute
) => {
  // console.log(columnIndex);
  if (dataArray[columnIndex]) {
    const value = dataArray[columnIndex];
    // console.log(value);
    return (
      <SheetInput
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        attribute={attribute}
        value={value}
        key={columnIndex}
        onSheetDataChange={onSheetDataChange}
      />
    );
  }
};

const SheetRow = ({ rowIndex, data, attributes, type, onSheetDataChange }) => {
  // console.log(data);
  let dataArray;
  if (data) {
    rowIndex === 0 && type === "header"
      ? (dataArray = Object.keys(data))
      : (dataArray = Object.values(data));
  }
  return (
    <tr>
      <td className="left-index-element" key={Math.random()}>
        {type === "row" ? rowIndex + 2 : rowIndex + 1}
      </td>
      {Array(26)
        .fill("")
        .map((el, columnIndex) => (
          <>
            <td key={columnIndex}>
              {data && dataArray && dataArray[columnIndex] && attributes ? (
                getRow(
                  rowIndex,
                  columnIndex,
                  dataArray,
                  onSheetDataChange,
                  attributes[columnIndex]
                )
              ) : (
                <SheetInput
                  rowIndex={rowIndex}
                  columnIndex={columnIndex}
                  key={columnIndex}
                />
              )}
            </td>
          </>
        ))}
    </tr>
  );
};

export default SheetRow;
