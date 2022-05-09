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
        <div className='option-card pointer' onClick={newSheetClickHandler}>
          <img
            src='https://ssl.gstatic.com/docs/templates/thumbnails/sheets-blank-googlecolors.png'
            alt='add-img'
          />
        </div>
        <Upload />
      </div>
    </section>
  );
};

export default SheetMenu;
