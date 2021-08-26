import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalOverlay = ({ closeModal, children }) => {
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
				{children}
				<div className='footer'>
					<button
						onClick={() => {
							closeModal(false);
						}}
						className='btn'
						id='cancelBtn'>
						Close
					</button>
				</div>
			</div>
		</div>
	);
	return ReactDOM.createPortal(content, document.getElementById('modal'));
};



function Modal(props) {
	return <ModalOverlay {...props} />;
}

export default Modal;
