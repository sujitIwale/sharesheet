import React, { useRef } from "react";
import { useSheet } from "../../hooks/sheet";
import SheetTableHeader from "./SheetTableHeader";
import SheetRow from "./SheetRow";
import "./SheetTable.css";

const SheetTable = () => {
  const { sheetData, setSheetData } = useSheet();

  const table = useRef();

  const onSheetDataChange = (rowId, columnId, newData) => {
    try {
      const { data } = sheetData;
      if (!data[rowId]) {
        data[rowId] = [];
      }
      // console.log(sheetData.data[rowId], columnId, newData);
      sheetData.data[rowId][columnId] = newData;
      // console.log(sheetData.data);
      setSheetData({ ...sheetData, data: JSON.stringify(sheetData.data) });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(sheetData.data);
  if (sheetData.data && !Array.isArray(sheetData.data)) {
    try {
      sheetData.data = JSON.parse(sheetData.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (Array.isArray(sheetData.data))
    return (
      <div className='sheet-table-container'>
        <table className='table' ref={table}>
          <SheetTableHeader tableRef={table} />
          {Array(50)
            .fill("")
            .map((row, rowIndex) => (
              <SheetRow
                rowIndex={rowIndex}
                data={sheetData.data[rowIndex]}
                type='row'
                key={rowIndex}
                tableRef={table}
                onSheetDataChange={onSheetDataChange}
              />
            ))}
        </table>
      </div>
    );
  return <h2>Something went wrong</h2>;
};

export default SheetTable;
