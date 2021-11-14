import React, { useRef } from 'react';

// ui
import Button from 'components/ui/Button/Button';

// icons
import { ReactComponent as IconCheckCircle } from 'icons/material/check-circle.svg';
import { ReactComponent as IconClear } from 'icons/material/clear.svg';
import { ReactComponent as IconInfo } from 'icons/material/info.svg';
import { ReactComponent as IconWarning } from 'icons/material/warning.svg';

// styles
import './Toast.css';

const Toast = ({ action, classes, isOpen, mods, onClose, position, text, type }) => {
	// refs
	const refToast = useRef();

	// vars
	const typeMod = type || 'info';

	let classNames = [];
	let modNames = [];
	let icon = <IconInfo />;

	const handleClose = (e) => {
		if (refToast) {
			refToast.current.classList.remove('toast--open');
		}

		if (onClose) {
			onClose(e);
		}

		return true;
	};

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` toast--${mods[i]}`;
		}
	}

	if (isOpen) {
		modNames += ' toast--open';

		setTimeout(() => {
			if (refToast.current) {
				refToast.current.classList.remove('toast--open');

				if (onClose) {
					onClose();
				}
			}
		}, 6000);
	}

	if (position) {
		if (position.includes('top')) {
			modNames += ` toast--top`;
		} else {
			modNames += ` toast--bottom`;
		}

		if (position.includes('Left')) {
			modNames += ` toast--left`;
		} else {
			modNames += ` toast--right`;
		}
	}

	if (type === 'success') {
		icon = <IconCheckCircle />;
	}

	if (type === 'warning') {
		icon = <IconWarning />;
	}

	return (
		<div
			aria-live="assertive"
			aria-atomic="true"
			className={`${classNames}toast${modNames} toast--${typeMod}`}
			ref={refToast}
			role="alert">
			<div className="toast__icon">{icon}</div>
			<div className="toast__content">
				<div>{text}</div>
				<div className="toast__actions">
					{action && <Button mods={['text']} onClick={action.onClick} text={action.text} />}
					<button aria-label="Close" className="toast__close" onClick={handleClose}>
						<IconClear />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Toast;
