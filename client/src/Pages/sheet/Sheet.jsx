import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchUser from "../../components/SearchUser/SearchUser";
import Modal from "../../components/shared/Modal/Modal";
import SheetHeader from "../../components/SheetHeader/SheetHeader";
import SheetTable from "../../components/SheetTable/SheetTable";
import { useSheet } from "../../hooks/sheet";
import { useAuth } from "../../hooks/auth";
import "./Sheet.css";

const Sheet = () => {
  const [Loading, setLoading] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const sheetId = useParams().sheetId;
  const { fetchSheetData, sheetData, searchUsers, addUserToSheet } = useSheet();
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    fetchSheetData(sheetId, () => setLoading(false));
    // eslint-disable-next-line
  }, [sheetId]);
  if (!sheetData) return <></>;
  console.log(sheetData.data);
  const modalAction = () => {
    setModalOpen((state) => !state);
  };
  return (
    <div className='sheet-page-main customized-scrollbar'>
      <SheetHeader openModal={modalAction} user={user} />
      {Loading || !sheetData.data ? <h2>Loading ....</h2> : <SheetTable />}
      {ModalOpen && (
        <Modal closeModal={modalAction} modalTitle='Share with other users'>
          <SearchUser
            searchUsers={searchUsers}
            addUserToSheet={addUserToSheet}
            sheetData={sheetData}
            user={user}
          />
        </Modal>
      )}
    </div>
  );
};

export default Sheet;
