// styles
import './Section.css';

function Section({ children, classes, component, mods }) {
	const Tag = component ? component : 'section';
	const classNames = classes ? ` ${classes.join(' ')}` : '';
	const modNames = mods ? ` ${mods.map((mod) => `section--${mod}`).join(' ')}` : '';

	return <Tag className={`section${classNames}${modNames}`}>{children}</Tag>;
}

export default Section;
