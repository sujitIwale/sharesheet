import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSheet } from "../../../hooks/sheet";
import ListOptionBar from "./ListOptionBar";
import "./SheetsList.css";

const SheetsList = () => {
  const { fetchSheets, sheets } = useSheet();

  useEffect(() => {
    fetchSheets();
    // eslint-disable-next-line
  }, []);
  return (
    <section className="sheet-list-collection project-page-container">
      <ListOptionBar />
      <div className="sheet-list">
        {Array.isArray(sheets) && sheets.length > 0 ? (
          <Fragment>
            {sheets.map((sheet, i) => (
              <div className="sheet-list-item" key={i}>
                <h4>{i + 1}</h4>
                <h4>{sheet.name}</h4>
                <h4>{sheet.ownerName}</h4>
                <h4>{new Date(sheet.updatedAt).toLocaleDateString()}</h4>
                <h4 className="sheet-list-item-options">
                  <i className="fa-solid fa-ellipsis-vertical pointer"></i>
                  <Link to={`/sheet/${sheet._id}`}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </h4>
              </div>
            ))}
          </Fragment>
        ) : (
          <p>You dont have any sheet.Create One</p>
        )}
      </div>
    </section>
  );
};

export default SheetsList;
