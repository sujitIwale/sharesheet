import React, { useEffect } from "react";
import SheetMenu from "../../components/sections/sheetMenu/SheetMenu";
import SheetsList from "../../components/sections/sheetsList/SheetsList";
import LineLoader from "../../components/shared/Loader/LineLoader";
import { useAuth } from "../../hooks/auth";
import "./Project.css";

const Project = () => {  
  const {loading,isAuthenticated } = useAuth()
  useEffect(() => {
    document.title = "SpreadSheet";
  }, []);
  if(!isAuthenticated || loading) return <LineLoader />
  return (
    <main className='project-page-main'>
      <SheetMenu />
      <SheetsList />
    </main>
  );
};

export default Project;
