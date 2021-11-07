// styles
import './Section.css';

const Section = ({ children, component, classes, mods, ...props }) => {
	// vars
	const Tag = component || 'section';

	let classNames = '';
	let modNames = '';

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` section--${mods[i]}`;
		}
	}

	return (
		<Tag className={`${classNames}section${modNames}`} {...props}>
			{children}
		</Tag>
	);
};

export default Section;
