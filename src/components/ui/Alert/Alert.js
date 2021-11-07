import React, { useState } from 'react';

// icons
import { ReactComponent as IconCheckCircle } from 'icons/material/check-circle.svg';
import { ReactComponent as IconClear } from 'icons/material/clear.svg';
import { ReactComponent as IconInfo } from 'icons/material/info.svg';
import { ReactComponent as IconWarning } from 'icons/material/warning.svg';

// styles
import './Alert.css';

const Alert = ({ classes, children, hasClose = true, mods, onClose, type }) => {
	// state
	const [isClosed, setIsClosed] = useState(false);

	// vars
	const typeClass = type || 'info';

	const icons = {
		error: <IconInfo />,
		info: <IconInfo />,
		success: <IconCheckCircle />,
		warning: <IconWarning />,
	};

	let classNames = '';
	let modNames = '';

	const handleClose = (e) => {
		if (onClose) {
			onClose();
		}

		setIsClosed(true);
	};

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` alert--${mods[i]}`;
		}
	}

	if (isClosed) {
		return false;
	}

	return (
		<div className={`${classNames}alert${modNames} alert--${typeClass}`} role="alert">
			<div className="alert__content">
				<div className="alert__icon">{icons[typeClass]}</div>
				<div className="alert__text">{children}</div>
			</div>
			{hasClose && (
				<button aria-label="Close Alert" className="alert__close" onClick={handleClose}>
					<IconClear />
				</button>
			)}
		</div>
	);
};

export default Alert;
