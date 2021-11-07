// styles
import './Label.css';

const Label = ({ children, classes, id, mods }) => {
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
			modNames += ` label--${mods[i]}`;
		}
	}

	return (
		<label className={`${classNames}label${modNames}`} htmlFor={id}>
			{children}
		</label>
	);
};

export default Label;
