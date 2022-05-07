import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SheetHeader from "../../components/SheetHeader/SheetHeader";
import SheetTable from "../../components/SheetTable/SheetTable";
import { useSheet } from "../../hooks/sheet";
import "./Sheet.css";

const Sheet = () => {
  const [Loading, setLoading] = useState(false);
  const sheetId = useParams().sheetId;
  const { fetchSheetData, sheetData } = useSheet();

  useEffect(() => {
    setLoading(true);
    fetchSheetData(sheetId, () => setLoading(false));
    // eslint-disable-next-line
  }, [sheetId]);
  console.log(sheetData.data);
  return (
    <div className='sheet-page-main customized-scrollbar'>
      <SheetHeader />
      {Loading || !sheetData.data ? <h2>Loading ....</h2> : <SheetTable />}
    </div>
  );
};

export default Sheet;
