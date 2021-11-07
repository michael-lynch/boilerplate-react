// ui
import Typography from 'components/ui/Typography/Typography';

// icons
import { ReactComponent as IconArrowForward } from 'icons/material/arrow-forward.svg';

// styles
import './Button.css';

const Button = ({
	ariaLabel,
	classes,
	component,
	disabled,
	form,
	href,
	icon,
	iconEnd,
	iconStart,
	mods,
	onClick,
	target,
	text,
	type,
}) => {
	// vars
	const btnProps = {};
	const textMods = [];

	let Tag = component || 'button';
	let classNames = '';
	let modNames = '';

	const renderIcon = (icon) => {
		if (icon) {
			return <span className="btn__icon">{icon}</span>;
		}
		return false;
	};

	const renderIconPreset = (type) => {
		if (
			(mods?.includes('forward') && type === 'forward') ||
			(mods?.includes('backward') && type === 'backward')
		) {
			return (
				<span className="btn__icon">
					<IconArrowForward />
				</span>
			);
		}
	};

	if (ariaLabel) {
		btnProps['aria-label'] = ariaLabel;
	}

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` btn--${mods[i]}`;
		}
	}

	if (mods?.includes('icon')) {
		textMods.push('screenreader');
	}

	if (disabled) {
		btnProps.disabled = disabled;
	}

	if (form) {
		btnProps.form = form;
	}

	if (href) {
		Tag = 'a';
		btnProps.href = href;
	}

	if (onClick) {
		btnProps.onClick = onClick;
	}

	if (target) {
		btnProps.target = target;
	}

	if (type) {
		btnProps.type = type;
	}

	return (
		<Tag className={`${classNames}btn${modNames}`} {...btnProps}>
			{renderIcon(icon)}
			{renderIcon(iconStart)}
			{renderIconPreset('backward')}
			<Typography classes={['btn__text']} mods={textMods} component="span">
				{text}
			</Typography>
			{renderIcon(iconEnd)}
			{renderIconPreset('forward')}
		</Tag>
	);
};

export default Button;
