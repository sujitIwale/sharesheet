import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPeriod } from "../../../helpers/date";
import { useSheet } from "../../../hooks/sheet";
import TableSkeleton from "../../shared/Skeleton/TableSkeleton";
import ListOptionBar from "./ListOptionBar";
import "./SheetsList.css";

const SheetsList = () => {
  const { fetchSheets, sheets } = useSheet();

  useEffect(() => {
    fetchSheets();
    // eslint-disable-next-line
  }, []);

  if (!Array.isArray(sheets)) return <TableSkeleton />;
  if (sheets.length <= 0)
    return (
      <div className='msg-container'>
        <h2>You don't have any sheets.Create One</h2>
      </div>
    );

  return (
    <table className='sheet-list-table project-page-container'>
      <ListOptionBar />
      <tbody>
        {Array.isArray(sheets) && sheets.length > 0 && (
          <Fragment>
            {sheets.map((sheet, i) => (
              <tr className='sheet-list-item' key={i}>
                <td>{i + 1}</td>

                <td>{sheet.name}</td>
                <td>{sheet.ownerName}</td>
                <td>{getPeriod(sheet.updatedAt)}</td>
                <td className='sheet-list-item-options'>
                  {/* <i className='fa-solid fa-ellipsis-vertical pointer'></i> */}
                  <Link to={`/sheet/${sheet._id}`}>
                    <i className='fa-solid fa-arrow-up-right-from-square'></i>
                  </Link>
                </td>
              </tr>
            ))}
          </Fragment>
        )}
      </tbody>
    </table>
  );
};

export default SheetsList;

/* 
<ListOptionBar />
      {Array.isArray(sheets) && sheets.length > 0 && (
        <Fragment>
          {sheets.map((sheet, i) => (
            <tr className='sheet-list-item' key={i}>
              <td>{i + 1}</td>
              <td>{sheet.name}</td>
              <td>{sheet.ownerName}</td>
              <td>{getPeriod(sheet.updatedAt)}</td>
              <td className='sheet-list-item-options'>
                <i className='fa-solid fa-ellipsis-vertical pointer'></i>
                <Link to={`/sheet/${sheet._id}`}>
                  <i className='fa-solid fa-arrow-up-right-from-square'></i>
                </Link>
              </td>
            </tr>
          ))}
        </Fragment>
      )}

*/
