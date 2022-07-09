import React, { useEffect } from "react";
import SheetInput from "../shared/SheetInput/SheetInput";

const getRow = (rowIndex, columnIndex, dataArray, onSheetDataChange) => {
  // console.log(columnIndex);
  if (dataArray[columnIndex]) {
    const value = dataArray[columnIndex];
    // console.log(value);
    return (
      <SheetInput
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        value={value}
        key={columnIndex}
        onSheetDataChange={onSheetDataChange}
      />
    );
  }
};

const SheetRow = ({ rowIndex, data, type, onSheetDataChange, tableRef }) => {
  // console.log(data);
  useEffect(() => {
    // resizer(tableRef.current, "th");
  }, []);
  return (

    <tr>
      <td className='left-index-element' key={Math.random()}>
        {rowIndex + 1}
      </td>
      {Array(26)
        .fill("")
        .map((el, columnIndex) => (
          <td key={columnIndex} id={`td${columnIndex}`}>
            {data && data && data[columnIndex] ? (
              getRow(rowIndex, columnIndex, data, onSheetDataChange)
            ) : (
              <SheetInput
                rowIndex={rowIndex}
                columnIndex={columnIndex}
                key={columnIndex}
                onSheetDataChange={onSheetDataChange}
              />
            )}
          </td>
        ))}
    </tr>
  );
};

export default SheetRow;
