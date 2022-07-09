import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFile } from "../../../hooks/file";
import Modal from "../../shared/Modal/Modal";
import Loader from "../../shared/Loader/Loader";
import "./Upload.css";

const Upload = () => {
  const history = useHistory();
  const [ModalOpen, setModalOpen] = useState(false);
  const [File, setFile] = useState(null);
  const [uploadStatus, setuploadStatus] = useState(false);
  const [Error, setError] = useState(null);

  const { sendFileData, loading } = useFile();

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFile(file);
    setuploadStatus(false);
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setuploadStatus(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };
  const onUpload = async () => {
    if (
      !File ||
      uploadStatus ||
      File.type !== "text/csv" ||
      !(File.size < 17825792)
    ) {
      if (File && !File.size < 17825792)
        setError({ msg: "Please Select a smaller file", type: "danger" });
      else setError({ msg: "Please Select a csv file", type: "danger" });
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }
    // return;
    setuploadStatus(true);
    const data = new FormData();
    data.append("csvdata", File);
    // const fileText = await File.text();
    // console.log(fileText);
    const res = await sendFileData(data);
    // console.log(res._id);
    setFile(null);
    if (res && res.error) {
      setError({
        msg: "Some Error occurred please try again ",
        type: "danger",
      });
      // closeModal();
    } else history.push(`sheet/${res._id}`);
  };
  return (
    <>
      {ModalOpen && (
        <Modal
          closeModal={() => setModalOpen(false)}
          modalTitle='Upload a Csv File'
        >
          {!loading ? (
            <div className='upload-main'>
              <form
                className='upload-form'
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
              >
                <input
                  id='file-upload'
                  type='file'
                  name='file'
                  onChange={onChange}
                />
                <label htmlFor='file-upload'>
                  <div className='upload-btn-container pointer'>
                    <i className='fa fa-download'></i>
                    <p>{File && File.name}</p>
                    <span id='file-select-btn'>
                      Select a file
                    </span>
                  </div>
                </label>
              </form>
              {Error && <h3>{Error.msg}</h3>}
            </div>
          ) : (
            <Loader />
          )}
          <div className="flex center">
            <button onClick={onUpload} disabled={loading} className='btn btn-primary bg-2 upload-btn'>
              Upload
            </button>
          </div>
        </Modal>
      )}
      <div className='option-card shadow upload btn' onClick={openModal}>
        <i className='fa-solid fa-upload'></i>
      </div>
    </>
  );
};

export default Upload;
