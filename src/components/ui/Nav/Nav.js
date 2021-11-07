// router
import { NavLink } from 'react-router-dom';

// ui
import Button from 'components/ui/Button/Button';
import Typography from 'components/ui/Typography/Typography';

// utils
import { toKebabCase } from 'utils';

// img
import { ReactComponent as Logo } from 'img/logos/logo.svg';

// icons
import { ReactComponent as IconClear } from 'icons/material/clear.svg';

// styles
import './Nav.css';

const Nav = ({ classes, isOpen, items, mods, setIsNavOpen }) => {
	// vars
	let classNames = '';
	let modNames = '';

	const renderItems = (items) => {
		return items.map((item) => {
			const linkProps = {};

			let Tag = NavLink;

			// if hash link
			if (item.url.includes('#')) {
				Tag = 'a';

				// scroll to hash id
				linkProps.onClick = (e) => {
					e.preventDefault();

					const elToScrollTo = document.querySelector(item.url);

					if (elToScrollTo) {
						document.querySelector(item.url).scrollIntoView({
							behavior: 'smooth',
						});
					}

					// close nav
					setIsNavOpen(false);
				};

				linkProps.href = item.url;
			} else {
				linkProps.to = item.url;

				// scroll to top
				linkProps.onClick = (e) => {
					window.scrollTo({
						top: 0,
						behavior: 'smooth',
					});

					// close nav
					setIsNavOpen(false);
				};
			}

			return (
				<li className="list__item" key={`nav-item-${toKebabCase(item.label)}`}>
					<Tag className="nav__a" {...linkProps}>
						{item.icon && <span>{item.icon}</span>}
						<span>{item.label}</span>
					</Tag>

					{item.children && <ul className="item__children">{renderItems(item.children)}</ul>}
				</li>
			);
		});
	};

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` nav--${mods[i]}`;
		}
	}

	if (isOpen) {
		modNames += ` nav--open`;
	}

	return (
		<div className={`${classNames}nav${modNames}`}>
			<div className="nav__mask">
				<header className="nav__header">
					<Logo />
					<Typography classes={['nav__title', 'h2']} component="h1">
						Boilerplate
					</Typography>
				</header>
				<nav className="nav__nav">
					<ul className="nav__list">{renderItems(items)}</ul>
				</nav>
				<Button
					classes={['nav__close']}
					icon={<IconClear />}
					mods={['icon']}
					onClick={() => setIsNavOpen(false)}
					text="Close"
				/>
			</div>
		</div>
	);
};

export default Nav;
