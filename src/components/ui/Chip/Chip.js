import React, { useState } from 'react';

// ui
import Button from 'components/ui/Button/Button';

// icons
import { ReactComponent as IconClear } from 'icons/material/clear.svg';

// styles
import './Chip.css';

const Chip = ({ classes, label, mods, onDelete, type }) => {
	// state
	const [isDeleted, setIsDeleted] = useState(false);

	// vars
	const typeModName = type ? ` chip--${type}` : '';

	let classNames = '';
	let modNames = '';

	const handleClose = (e) => {
		if (onDelete) {
			onDelete(e);
		}

		setIsDeleted(true);
	};

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` chip--${mods[i]}`;
		}
	}

	if (onDelete) {
		modNames += ` chip--deletable`;
	}

	if (isDeleted) {
		return false;
	}

	return (
		<div className={`${classNames}chip${modNames}${typeModName}`}>
			{label}
			{onDelete && (
				<Button icon={<IconClear />} mods={['icon', 'sm']} onClick={handleClose} text="Close" />
			)}
		</div>
	);
};

export default Chip;
