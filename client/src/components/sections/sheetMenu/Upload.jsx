import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFile } from "../../../hooks/file";
import Modal from "../../shared/Modal/Modal";
import Loader from "../../shared/Loader/Loader";
import "./Upload.css";
import { postRequest } from "../../../utils/apiRequests";
import { createSheet_Url } from "../../../utils/apiEndPoints";

const Upload = () => {
  const history = useHistory();
  const [ModalOpen, setModalOpen] = useState(false);
  const [File, setFile] = useState(null);
  const [uploadStatus, setuploadStatus] = useState(false);

  const { sendFileData, setError, loading } = useFile();

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
  const closeModal = () => {
    setModalOpen(false);
  };
  const onUpload = async () => {
    if (File === null || uploadStatus) {
      setError({ msg: "Please Select a file", type: "danger" });
      return;
    }
    setuploadStatus(true);
    const data = new FormData();
    data.append("csvdata", File);
    // const fileText = await File.text();
    // console.log(fileText);
    const res = await sendFileData(data);
    console.log(res._id);
    if (res) {
      history.push(`sheet/${res._id}`);
      closeModal();
    }
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
                    <span id='file-upload-btn' className='btn-primary'>
                      Select a file
                    </span>
                  </div>
                </label>
              </form>
              <button onClick={onUpload}>Upload</button>
            </div>
          ) : (
            <Loader />
          )}
        </Modal>
      )}
      <div className='option-card btn' onClick={openModal}>
        Upload Csv File
      </div>
    </>
  );
};

export default Upload;
