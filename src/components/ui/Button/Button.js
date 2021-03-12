import React from 'react';

// core
import Typography from 'components/ui/Typography/Typography';

// styles
import './Button.css';

const Button = ({ children, classes, component, mods, onClick, text, to, ...other }) => {
	const Tag = component ? component : 'button';
	const classNames = classes ? ` ${classes.join(' ')}` : '';
	const modNames = mods ? ` ${mods.map((mod) => `btn--${mod}`).join(' ')}` : '';
	const btnProps = {
		className: `btn${classNames}${modNames}`,
	};

	if (onClick) {
		btnProps.onClick = onClick;
	}

	if (to) {
		btnProps.to = to;
	}

	return (
		<Tag {...btnProps} {...other}>
			<Typography classes={['btn__text']} component="span">
				{children ? children : text}
			</Typography>
		</Tag>
	);
};

export default Button;
