// layout
import Section from 'components/layout/Section/Section';

// ui
import Typography from 'components/ui/Typography/Typography';

// forms
import FormLogin from 'components/forms/FormLogin/FormLogin';

// img
import { ReactComponent as Logo } from 'img/logos/logo.svg';

// styles
import './Login.css';

const Login = () => {
	return (
		<Section classes={['login']}>
			<div className="login__content">
				<div className="login__logo">
					<Logo />
				</div>
				<div className="login__card">
					<Typography classes={['h3']} component="h1">
						{process.env.REACT_APP_TITLE}
					</Typography>
					<Typography classes={['login__intro']}>{process.env.REACT_APP_DESCRIPTION}</Typography>
					<FormLogin />
				</div>
			</div>
		</Section>
	);
};

export default Login;
