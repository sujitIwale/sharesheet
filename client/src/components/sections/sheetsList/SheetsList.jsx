import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPeriod } from "../../../helpers/date";
import { useSheet } from "../../../hooks/sheet";
import TableSkeleton from "../../shared/Skeleton/TableSkeleton";
import ListOptionBar from "./ListOptionBar";
import SheetListHeader from "./SheetListHeader";
import "./SheetsList.css";


const List = ({ sheets }) => {
  return sheets.map((sheet, i) => (
    <tr className='sheet-list-item' key={i}>
      <td style={{ borderBottomLeftRadius: '30px', borderTopLeftRadius: '30px' }}>{i + 1}</td>

      <td style={{ textAlign: 'initial' }}>{sheet.name}</td>
      <td>{sheet.ownerName}</td>
      <td>{getPeriod(sheet.updatedAt)}</td>
      <td className='sheet-list-item-options' style={{ borderBottomRightRadius: '30px', borderTopRightRadius: '30px' }}>
        {/* <i className='fa-solid fa-ellipsis-vertical pointer'></i> */}
        <Link to={`/sheet/${sheet._id}`}>
          <i className='fa-solid fa-arrow-up-right-from-square'></i>
        </Link>
      </td>
    </tr>
  ))
}


const SheetsList = () => {
  const { fetchSheets, sheets, searchedSheets, searching, searchSheets } = useSheet();
  const [UserSheets, setUserSheets] = useState(sheets)

  useEffect(() => {
    fetchSheets();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setUserSheets(searchedSheets)
    // eslint-disable-next-line
  }, [searchedSheets, searching])

  useEffect(() => {
    setUserSheets(sheets)
  }, [sheets])



  if (!Array.isArray(UserSheets)) return <TableSkeleton />;
  if (UserSheets.length <= 0 && sheets.length <= 0)
    return (
      <div className='msg-container'>
        <h2>You don't have any sheets.Create One</h2>
      </div>
    );

  return (
    <div className="sheet-list-container">
      <SheetListHeader sheets={UserSheets} searchSheets={searchSheets} />
      {(searching && searchedSheets.length <= 0) ? <div className='msg-container'>
        <h2>Nothing Found.Try using another keyword</h2>
      </div> :
        <table className='sheet-list-table'>
          <ListOptionBar />
          <tbody>
            {Array.isArray(sheets) && sheets.length > 0 && (
              <Fragment>
                {searching ? <List sheets={searchedSheets} /> : <List sheets={sheets} />}
              </Fragment>
            )}
          </tbody>
        </table>}
    </div>
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
