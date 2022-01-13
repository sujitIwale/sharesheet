import React, { useState } from 'react';

const SheetInput = ({ value, onChange }) => {
	const [Input, setInput] = useState(value);
	const onInputChange = (e) => {
		setInput(e.target.value);
	};
	return <input value={Input} onChange={onInputChange} />;
};

export default SheetInput;
