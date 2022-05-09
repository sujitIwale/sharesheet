import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className='loader-container'>
      <img src='/loading.gif' className='loader-gif' alt='loader' />
    </div>
  );
};

export default Loader;
