// icons
import { ReactComponent as IconLock } from 'icons/material/lock.svg';
import { ReactComponent as IconMailOutline } from 'icons/material/mail-outline.svg';
import { ReactComponent as IconPhoneIphone } from 'icons/material/phone-iphone.svg';
import { ReactComponent as IconPriorityHigh } from 'icons/material/priority-high.svg';
import { ReactComponent as IconSearch } from 'icons/material/search.svg';

// styles
import './Input.css';

const Input = ({
	ariaLabel,
	classes,
	defaultValue,
	disabled,
	error,
	helper,
	iconEnd,
	iconStart,
	id,
	mods,
	name,
	onChange,
	placeholder,
	readOnly,
	refInput,
	required,
	type,
	value,
}) => {
	const inputType = type || 'text';
	const inputProps = {};
	const startIcons = ['email', 'password', 'search', 'tel'];

	let classNames = '';
	let modNames = '';
	let helperMsg = null;

	const renderIcon = (pos) => {
		let icon = null;

		if (pos === 'start') {
			if (iconStart) {
				icon = iconStart;
			} else if (type === 'email') {
				icon = <IconMailOutline />;
			} else if (type === 'password') {
				icon = <IconLock />;
			} else if (type === 'tel') {
				icon = <IconPhoneIphone />;
			} else if (type === 'search') {
				icon = <IconSearch />;
			}
		}

		if (pos === 'end' && iconEnd) {
			icon = iconEnd;
		}

		if (pos === 'end' && error) {
			icon = <IconPriorityHigh />;
		}

		return <div className={`input__icon input__icon--${pos}`}>{icon}</div>;
	};

	if (ariaLabel !== undefined) {
		inputProps['aria-label'] = ariaLabel;
	}

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` input--${mods[i]}`;
		}
	}

	if (error) {
		modNames += ' input--error';
		helperMsg = error;
	}

	if (error || iconEnd) {
		modNames += ' input--iconend';
	}

	if (!error && helper) {
		helperMsg = helper;
	}

	if (defaultValue) {
		inputProps.defaultValue = defaultValue;
	}

	if (disabled) {
		inputProps.disabled = disabled;
	}

	if (id) {
		inputProps.id = id;
	}

	if (name) {
		inputProps.name = name;
	}

	if (onChange) {
		inputProps.onChange = onChange;
	}

	if (iconStart || startIcons.includes(type)) {
		modNames += ' input--iconstart';
	}

	if (readOnly) {
		inputProps.readOnly = readOnly;
	}

	if (refInput) {
		inputProps.ref = refInput;
	}

	if (required) {
		inputProps.required = required;
	}

	if (value !== undefined) {
		inputProps.value = value;
	}

	return (
		<div className={`${classNames}input${modNames}`}>
			<div className="input__wrapper">
				<input
					className="input__input"
					placeholder={placeholder}
					type={inputType}
					{...inputProps}
				/>
				{error && <>{renderIcon('end')}</>}
				{iconEnd && <>{renderIcon('end')}</>}
				{iconStart && <>{renderIcon('start')}</>}
				{type && <>{renderIcon('start')}</>}
			</div>
			{helperMsg && <div className="input__helper">{helperMsg}</div>}
		</div>
	);
};

export default Input;
