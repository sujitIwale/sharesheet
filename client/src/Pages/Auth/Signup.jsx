import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Auth.module.css';
import AuthContext from '../../context/auth/AuthContext';
import Auth from './Auth';

const Signup = () => {
	const [User, setUser] = useState({
		name: '',
		email: '',
		password: '',
		username: '',
	});
	const [SubmitButton, setSubmitButton] = useState({
		ButtonText: 'Sign Up',
		clicked: false,
		disabled: false,
	});

	const [newUserName, setnewUserName] = useState({
		available: true,
	});

	const authContext = useContext(AuthContext);
	const { register } = authContext;

	const availableStatus = () => {
		const username = User.username.trim();
		if (username === '') return;
		if (newUserName.available === true) {
			return `${username} is available`;
		}

		return `${username} is not available`;
	};

	let timer;
	const search = async (value) => {
		const res = await axios.get(
			`http://localhost:3001/api/user/find/username/available?username=${value}`
		);
		const available = res.data.usernameAvailable;
		setnewUserName({ available });
	};
	const onInputChange = (e) => {
		if (e.target.name === 'username') {
			clearTimeout(timer);
			setUser({ username: e.target.value });
			let { value } = e.target;
			timer = setTimeout(() => {
				value = value.trim();
				if (value === '') return;

				search(value);
			}, 500);
		}
		setUser({ ...User, [e.target.name]: e.target.value });
	};

	const onFormSubmit = async () => {
		const data = {
			name: User.name.trim(),
			email: User.email.trim(),
			password: User.password.trim(),
			username: User.username.trim(),
		};
		setSubmitButton({
			ButtonText: 'Signing Up',
			clicked: true,
			disabled: true,
		});
		const res = await register(data);
		if (res) {
			return setUser({ name: '', email: '', password: '', username: '' });
		}
		setSubmitButton({
			ButtonText: 'Sign Up',
			clicked: false,
			disabled: false,
		});
	};

	return (
		<Auth formTitle='Sign Up'>
			<div className='login-form'>
				<div className='input-group'>
					<label>Name</label>
					<input
						type='text'
						placeholder='Enter your Name'
						name='name'
						onChange={onInputChange}
					/>
				</div>
				<div className='input-group'>
					<label>Email</label>
					<input
						type='email'
						placeholder='Enter your Email'
						name='email'
						onChange={onInputChange}
					/>
				</div>
				<div className='input-group'>
					<label>Username</label>
					<input
						type='text'
						placeholder='Enter Username'
						name='username'
						onChange={onInputChange}
					/>
					<h5
						className={
							newUserName.available === true
								? styles.active
								: styles.deactive
						}>
						{availableStatus()}
					</h5>
				</div>
				<div className='input-group'>
					<label>Password</label>
					<input
						type='password'
						placeholder='Enter Password'
						name='password'
						onChange={onInputChange}
					/>
				</div>
				<div className='input-group submit'>
					<button
						className='submit-btn'
						disabled={SubmitButton.disabled}
						onClick={onFormSubmit}>
						<span>{SubmitButton.ButtonText}</span>
						{SubmitButton.clicked && (
							<img src='/images/tenor.gif' alt='dotdot' />
						)}
					</button>
				</div>
				<footer className='form-footer'>
					<Link to='/signin'>
						<label className='pointer'>
							Already have an account? Sign In
						</label>
					</Link>
				</footer>
			</div>
		</Auth>
	);
};

export default Signup;
