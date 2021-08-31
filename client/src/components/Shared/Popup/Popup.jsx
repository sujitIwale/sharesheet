import React from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';

const PopupOverlay = ({ error }) => {
	const content = (
		<div className='popupBackground'>
			<div className={`popupContainer ${error.type}`}>
				<i
					className={`fas fa-${
						error.type === 'danger' ? 'exclamation' : 'check-square'
					}`}></i>
				<h3 className='popup-text'>{error.msg}</h3>
			</div>
		</div>
	);
	return ReactDOM.createPortal(content, document.getElementById('popup'));
};

function Popup(props) {
	return <PopupOverlay {...props} />;
}

export default Popup;
