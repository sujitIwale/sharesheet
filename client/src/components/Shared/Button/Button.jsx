import './Button.css';

const Button = ({ textValue, onClick, bgColor }) => {
	return (
		<button className='btn' onClick={onClick} style={{ bgColor }}>
			{textValue}
		</button>
	);
};

export default Button;
