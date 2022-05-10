import React from "react";
import ReactDOM from "react-dom";
import "./LineLoader.css";

const LineLoaderOverlay = () => {
  const content = (
    <div className='loader'>
      <div className='loader__element'></div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("line-loader"));
};

function LineLoader(props) {
  return <LineLoaderOverlay {...props} />;
}

export default LineLoader;
