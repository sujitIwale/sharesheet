import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSheet } from "../../../hooks/sheet";
import LineLoader from "../../shared/Loader/LineLoader";

import "./SheetMenu.css";
import Upload from "./Upload";

const SheetMenu = () => {
  const [Loading, setLoading] = useState(false);
  const history = useHistory();
  const { createNewSheet } = useSheet();
  const newSheetClickHandler = async () => {
    setLoading(true);
    const sheetId = await createNewSheet();
    setLoading(false);
    history.push(`sheet/${sheetId._id}`);
  };
  if (Loading) return <LineLoader />;
  return (
    <section className='sheet-menu'>
      <div className='menu-options project-page-container'>
        <div className="flex flex-column">
          <div className='flex flex-column option-card pointer shadow' onClick={newSheetClickHandler}>
            <img
              src='https://ssl.gstatic.com/docs/templates/thumbnails/sheets-blank-googlecolors.png'
              alt='add-img'
            />
          </div>
          <h4 className="mt-4">Blank</h4>
        </div>
        <div className="flex flex-column">
          <Upload />
          <h4 className="mt-4">Upload Csv File</h4>
        </div>

      </div>
    </section>
  );
};

export default SheetMenu;
