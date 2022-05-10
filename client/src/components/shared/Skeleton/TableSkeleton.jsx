import React from "react";
import "./Skeleton.css";

const TableSkeleton = () => {
  return (
    <div className='table-skeleton-container'>
      <table className='tg'>
        <thead>
          <tr>
            {Array(5)
              .fill("")
              .map((v, i) => (
                <th className='tg-cly1' key={i}>
                  <div className='line'></div>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {Array(6)
            .fill("")
            .map((v, i) => (
              <tr key={i}>
                {Array(5)
                  .fill("")
                  .map((v, j) => (
                    <td className='tg-cly1' key={j}>
                      <div className='line'></div>
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
