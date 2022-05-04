import React from "react";
import SheetInput from "../shared/SheetInput/SheetInput";

const SheetRow = ({rowIndex,data,type}) => {
    // console.log(data);
    let dataArray;
    if(data) {
        rowIndex === 0 && type === 'header' ? dataArray = Object.keys(data) : dataArray = Object.values(data)
    }
    const getRow = (columnIndex) => {
        if(data) {
            if(dataArray[columnIndex]) {
                const value = dataArray[columnIndex]
                return <SheetInput rowIndex={rowIndex} columnIndex={columnIndex} value={value} key={columnIndex}/>
            }
        } 
        return <SheetInput rowIndex={rowIndex} columnIndex={columnIndex} key={columnIndex}/>
    }
  return (
    <tr>
      <td className="left-index-element" key={Math.random()}>{type === 'row' ? rowIndex + 2 : rowIndex + 1 }</td>
      {Array(26)
        .fill("")
        .map((el, columnIndex) => <>
          <td key={columnIndex}>
            {getRow(columnIndex)}
          </td>
        </>)}
    </tr>
  );
};

export default SheetRow;
