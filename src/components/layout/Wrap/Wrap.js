// styles
import './Wrap.css';

function Wrap({ children, classes, mods }) {
	const classNames = classes ? ` ${classes.join(' ')}` : '';
	const modNames = mods ? ` ${mods.map((mod) => `wrap--${mod}`).join(' ')}` : '';

	return <div className={`wrap${classNames}${modNames}`}>{children}</div>;
}

export default Wrap;
