// styles
import './Wrapper.css';

const Wrapper = ({ classes, children, mods }) => {
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
			modNames += ` wrapper--${mods[i]}`;
		}
	}

	return <div className={`${classNames}wrapper${modNames}`}>{children}</div>;
};

export default Wrapper;
