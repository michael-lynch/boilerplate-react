// styles
import './Typography.css';

function Typography({ children, classes, component, mods }) {
	const Tag = component ? component : 'p';
	const classNames = classes ? ` ${classes.join(' ')}` : '';
	const modNames =
		mods && mods.length ? ` ${mods.map((mod) => `typography--${mod}`).join(' ')}` : '';

	return <Tag className={`typography${classNames}${modNames}`}>{children}</Tag>;
}

export default Typography;
