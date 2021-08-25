import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalOverlay = ({ closeModal }) => {
	const content = (
		<div className='modalBackground'>
			<div className='modalContainer'>
				<div className='titleCloseBtn'>
					<button
						onClick={() => {
							closeModal(false);
						}}>
						X
					</button>
				</div>
				<div className='title'>
					<h1>Are You Sure You Want to Continue?</h1>
				</div>
				<div className='body'>
					<p>
						The next page looks amazing. Hope you want to go there!
					</p>
				</div>
				<div className='footer'>
					<button
						onClick={() => {
							closeModal(false);
						}}
						id='cancelBtn'>
						Cancel
					</button>
					<button>Continue</button>
				</div>
			</div>
		</div>
	);
	return ReactDOM.createPortal(
		content,
		document.getElementById('modal-hook')
	);
};

const Backdrop = (props) => {
	return ReactDOM.createPortal(
		<div className='backdrop' onClick={props.onClick}></div>,
		document.getElementById('backdrop-hook')
	);
};

function Modal({ closeModal }) {
	return (
		<React.Fragment>
			{/* <Backdrop onClick={closeModal} /> */}
			<ModalOverlay closeModal={closeModal} />
		</React.Fragment>
	);
}

export default Modal;
