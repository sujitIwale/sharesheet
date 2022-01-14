import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import { isAuth } from '../../helpers/auth';
import AuthContext from '../../context/auth/AuthContext';
import ErrorContext from '../../context/error/ErrorContext';
import Form from '../../components/Shared/Form/Form';
import Logo from '../../components/Shared/Logo/Logo';
import Alert from '../../components/Shared/Alert/Alert';
import styles from './Auth.module.css';

const Auth = ({ children, formTitle }) => {
	const logoStyle = {
		marginBottom: '10px',
	};
	const authContext = useContext(AuthContext);
	const { googleAuth } = authContext;
	const errorContext = useContext(ErrorContext);
	const { error } = errorContext;

	const successResponseGoogle = async (data) => {
		googleAuth(data);
	};

	const errorResponseGoogle = async () => {
		// SetError('Something went wrong.');
	};

	return (
		<div className={styles.authPage}>
			<Logo styles={logoStyle} />
			<Form title={formTitle}>
				{isAuth() ? <Redirect to='/' /> : null}
				{error.message && (
					<Alert message={error.message} type={error.type} />
				)}
				<div className='social-login'>
					<GoogleLogin
						clientId='441930797332-t8ji6vmf2u8g0c34gjjufqqp92lrbdta.apps.googleusercontent.com'
						onSuccess={successResponseGoogle}
						onFailure={errorResponseGoogle}
						render={(renderProps) => (
							<button
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
									alt='google'
									width='20'
								/>
								<span>Google</span>
							</button>
						)}
					/>
				</div>
				{children}
			</Form>
		</div>
	);
};

export default Auth;
