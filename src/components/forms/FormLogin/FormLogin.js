import React, { useState } from 'react';

// requests
import { postLogin } from 'requests/auth';

// fields
import Input from 'components/fields/Input/Input';
import Label from 'components/fields/Label/Label';

// ui
import Button from 'components/ui/Button/Button';

// img
import { ReactComponent as LogoAd } from 'img/logos/ad.svg';

// styles
import './FormLogin.css';

const FormLogin = ({ hasSubmit = true }) => {
	// state
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		postLogin({
			email,
			password,
		})
			.then((res) => {
				console.log('SUCCESS', res);
			})
			.catch((error) => {
				console.log('ERROR', error);
			});
	};

	return (
		<form className="formlogin" id="form-login" onSubmit={handleSubmit}>
			<ul className="formlogin__list">
				<li>
					<Label id="formlogin-email">Email</Label>
					<Input
						id="formlogin-email"
						mods={['grey']}
						name="formlogin-email"
						onChange={(e) => setEmail(e.target.value)}
						required={true}
						type="email"
						value={email}
					/>
				</li>
				<li>
					<Label id="formlogin-password">Password</Label>
					<Input
						id="formlogin-password"
						mods={['grey']}
						name="formlogin-password"
						onChange={(e) => setPassword(e.target.value)}
						required={true}
						type="password"
						value={password}
					/>
				</li>
				{hasSubmit && (
					<>
						<li>
							<Button mods={['full']} text="Login" required={true} type="submit" />
						</li>
						<li>
							<div className="formlogin__or">
								<div className="or__text">OR</div>
							</div>
						</li>
						<li>
							<Button
								href="https://azure.active.directory.com/oauth"
								iconStart={<LogoAd />}
								mods={['full', 'microsoft']}
								text="Login with Microsoft AD"
								required={true}
							/>
						</li>
					</>
				)}
			</ul>
		</form>
	);
};

export default FormLogin;
