import React, { useEffect } from "react";
import SheetMenu from "../../components/sections/sheetMenu/SheetMenu";
import SheetsList from "../../components/sections/sheetsList/SheetsList";
import LineLoader from "../../components/shared/Loader/LineLoader";
import { useAuth } from "../../hooks/auth";
import { useSheet } from "../../hooks/sheet";
import "./Project.css";

const Project = () => {
  const { loading, isAuthenticated } = useAuth()
  const { removeSearchedSheets } = useSheet();
  useEffect(() => {
    document.title = "SpreadSheet";
    return () => {
      removeSearchedSheets()
    }
    // eslint-disable-next-line
  }, []);
  if (!isAuthenticated || loading) return <LineLoader />
  return (
    <main className='project-page-main customize-scrollbar'>
      <SheetMenu />
      <SheetsList />
    </main>
  );
};

export default Project;
