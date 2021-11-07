// styles
import './Typography.fonts.css';
import './Typography.css';

const Typography = ({ children, classes, component, id, mods }) => {
	// vars
	const Tag = component || 'p';
	const typographyProps = {};

	let classNames = '';
	let modNames = '';

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` typography--${mods[i]}`;
		}
	}

	if (id) {
		typographyProps.id = id;
	}

	return (
		<Tag className={`${classNames}typography${modNames}`} {...typographyProps}>
			{children}
		</Tag>
	);
};

export default Typography;
