import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchUser from "../../components/SearchUser/SearchUser";
import Modal from "../../components/shared/Modal/Modal";
import SheetHeader from "../../components/SheetHeader/SheetHeader";
import SheetTable from "../../components/SheetTable/SheetTable";
import { useSheet } from "../../hooks/sheet";
import { useAuth } from "../../hooks/auth";
import "./Sheet.css";
import LineLoader from "../../components/shared/Loader/LineLoader";

const Sheet = () => {
  const [Loading, setLoading] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const [chartOpened, setchartOpened] = useState(false);
  const sheetId = useParams().sheetId;
  const { fetchSheetData, sheetData, searchUsers, addUserToSheet } = useSheet();
  const { user } = useAuth();


  useLayoutEffect(() => {
    const mainSection = document.querySelector('.main-section')

    if (mainSection) {
      mainSection.style.overflow = 'hidden'
    }
    return () => {
      mainSection.style.overflow = 'auto'
    };
  }, [])


  useEffect(() => {
    setLoading(true);
    fetchSheetData(sheetId, () => setLoading(false));
    return () => {
      setLoading(false)
    }
    // eslint-disable-next-line
  }, [sheetId]);
  if (!sheetData || !user) return <LineLoader />;



  const chartAction = () => {
    setchartOpened((state) => {
      const sheet = document.getElementById('sheet')
      const chart = document.getElementById('chart')
      if (state) {
        if (sheet) sheet.style.width = '100%'
      } else {
        if (sheet) sheet.style.width = '60%'
        if (chart) sheet.style.flex = 1
      }

      return !state
    })
  }

  const modalAction = () => {
    setModalOpen((state) => !state);
  };
  return (
    <div className='sheet-page-main customized-scrollbar'>
      <SheetHeader openModal={modalAction} user={user} openChart={chartAction} />
      {Loading || !sheetData.data ? <LineLoader /> : <SheetTable chartOpened={chartOpened} />}
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
