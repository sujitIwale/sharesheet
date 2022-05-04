import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalOverlay = ({ closeModal, children, modalTitle }) => {
	const content = (
		<div
			className='modalBackground'
			onClick={() => {
				closeModal();
			}}>
			<div
				className='modalContainer'
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<div className='titleCloseBtn'>
					<button
						onClick={() => {
							closeModal(false);
						}}>
						<i className='fas fa-times white'></i>
					</button>
					<div className='modal-title'>{modalTitle}</div>
				</div>
				{children}
				<div className='footer'>
					<button
						onClick={() => {
							closeModal(false);
						}}
                        className='btn'
						style={{backgroundColor:'rgb(224, 21, 62)'}}
					>Close</button>
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