import React from "react";

const SheeTableHeader = () => {
  return (
    <tr className='sheet-header-row'>
      <td className='sheet-header-row-element' key={-1}></td>
      {Array(26)
        .fill("")
        .map((d, i) => (
          <td className='sheet-header-row-element' key={i}>
            {String.fromCharCode(64 + i + 1)}
          </td>
        ))}
    </tr>
  );
};

export default SheeTableHeader;
