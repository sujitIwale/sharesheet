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
    <section className='sheet-list-collection project-page-container'>
      <ListOptionBar />
      <div className='sheet-list'>
        {Array.isArray(sheets) && sheets.length > 0 && (
          <Fragment>
            {sheets.map((sheet, i) => (
              <div className='sheet-list-item' key={i}>
                <h4>{i + 1}</h4>
                <h4>{sheet.name}</h4>
                <h4>{sheet.ownerName}</h4>
                <h4>{getPeriod(sheet.updatedAt)}</h4>
                <h4 className='sheet-list-item-options'>
                  <i className='fa-solid fa-ellipsis-vertical pointer'></i>
                  <Link to={`/sheet/${sheet._id}`}>
                    <i className='fa-solid fa-arrow-up-right-from-square'></i>
                  </Link>
                </h4>
              </div>
            ))}
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default SheetsList;
