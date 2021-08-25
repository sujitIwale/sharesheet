import React from 'react';
import './UploadSection.css';

const UploadSection = () => {
	return (
		// <div className='upload-section-main'>
		<div class='upload-section-main'>
			<div class='card1 pointer'>
				<h3>Upload A CSV File</h3>
				<div class='go-corner'>
					<div class='go-arrow'>→</div>
				</div>
			</div>

			<div class='card1 pointer'>
				<h3>This is option 2</h3>
				<div class='go-corner'>
					<div class='go-arrow'>→</div>
				</div>
			</div>

			<div class='card1 pointer'>
				<h3>This is option 3</h3>
				<div class='dimmer'></div>
				<div class='go-corner'>
					<div class='go-arrow'>→</div>
				</div>
			</div>
		</div>
		// </div>
	);
};

export default UploadSection;
