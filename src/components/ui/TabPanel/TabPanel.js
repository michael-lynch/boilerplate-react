// styles
import './TabPanel.css';

const TabPanel = ({ classes, children, mods, value }) => {
	// vars
	let classNames = '';
	let modNames = '';

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` tabpanel--${mods[i]}`;
		}
	}

	return (
		<div
			aria-labelledby={`tab-${value}`}
			className={`${classNames}tabpanel${modNames} tabpanel--${value}`}
			hidden
			id={`tabpanel-${value}`}
			role="tabpanel">
			{children}
		</div>
	);
};

export default TabPanel;
