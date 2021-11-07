// styles
import './Box.css';

const Box = ({ classes, children, mods }) => {
	//vars
	let classNames = '';
	let modNames = '';

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` box--${mods[i]}`;
		}
	}

	return <div className={`${classNames}box${modNames}`}>{children}</div>;
};

export default Box;
