import React, { useEffect } from "react";
import { resizer } from "./resizer";

const SheeTableHeader = ({ tableRef }) => {
  useEffect(() => {
    resizer(tableRef.current, "th");
    // eslint-disable-next-line
  }, [tableRef.current]);
  return (
    <thead key={Math.random()}>
      <tr className='sheet-header-row' key={5}>
        <th className='sheet-header-row-element top' key={-1}></th>
        {Array(26)
          .fill("")
          .map((d, i) => (
            <th
              className='sheet-header-row-element'
              key={String.fromCharCode(64 + i + 1)}
              id={i}
            >
              {String.fromCharCode(64 + i + 1)}
            </th>
          ))}
      </tr>
    </thead>
  );
};

export default SheeTableHeader;
