import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
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
						<i className='fas fa-times white'></i>
					</button>
				</div>
				{children}
				<div className='footer'>
					<Button
						textValue='Close'
						onClick={() => {
							closeModal(false);
						}}
						bgColor='rgb(224, 21, 62)'
					/>
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
