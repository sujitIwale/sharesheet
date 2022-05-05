import React from "react";
import { useSheet } from "../../hooks/sheet";
import SheeTableHeader from "./SheeTableHeader";
import SheetRow from "./SheetRow";
import "./SheetTable.css";

const SheetTable = () => {
  const { sheetData } = useSheet();
  console.log(sheetData.data);
  if (sheetData.data && !Array.isArray(sheetData.data)) {
    try {
      sheetData.data = JSON.parse(sheetData.data);
    } catch (error) {
      console.log(error);
    }
  }
  if (Array.isArray(sheetData.data))
    return (
      <div className="sheet-table-container">
        <table>
          <SheeTableHeader />
          <SheetRow
            rowIndex={0}
            data={sheetData.data[0]}
            type="header"
            key={-1}
          />
          {Array(50)
            .fill("")
            .map((row, rowIndex) => (
              <>
                <SheetRow
                  rowIndex={rowIndex}
                  data={sheetData.data[rowIndex]}
                  type="row"
                  key={rowIndex}
                />
              </>
            ))}
        </table>
      </div>
    );
  return <h2>Something went wrong</h2>;
};

export default SheetTable;
