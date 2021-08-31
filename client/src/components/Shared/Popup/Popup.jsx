import React from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';

const PopupOverlay = ({ error }) => {
	const content = (
		<div className='popupBackground'>
			<div className={`popupContainer ${error.type}`}>{error.msg}</div>
		</div>
	);
	return ReactDOM.createPortal(content, document.getElementById('popup'));
};

function Popup(props) {
	return <PopupOverlay {...props} />;
}

export default Popup;
