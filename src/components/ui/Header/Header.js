// ui
import Button from 'components/ui/Button/Button';
import Typography from 'components/ui/Typography/Typography';

// img
import { ReactComponent as Logo } from 'img/logos/logo.svg';

// icons
import { ReactComponent as IconMenu } from 'icons/material/menu.svg';

// styles
import './Header.css';

const Header = ({ setIsNavOpen }) => {
	return (
		<header className="header">
			<div className="header__title">
				<div className="header__logo">
					<Logo />
				</div>
				<Typography classes={['header__text', 'h3']} component="h2">
					{process.env.REACT_APP_TITLE}
				</Typography>
			</div>
			<Button icon={<IconMenu />} mods={['icon']} onClick={() => setIsNavOpen(true)} text="Menu" />
		</header>
	);
};

export default Header;
