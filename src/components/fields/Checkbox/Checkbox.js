// fields
import Label from 'components/fields/Label/Label';

// icons
import { ReactComponent as IconCheck } from 'icons/material/check.svg';

// styles
import './Checkbox.css';

const Checkbox = ({
	checked,
	classes,
	disabled,
	id,
	label,
	mods,
	onChange,
	refInput,
	required,
	value,
}) => {
	// vars
	const checkboxProps = {};

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

	if (checked) {
		checkboxProps.checked = checked;
	}

	if (disabled) {
		modNames += ' checkbox--disabled';
		checkboxProps.disabled = disabled;
	}

	if (id) {
		checkboxProps.id = id;
	}

	if (onChange) {
		checkboxProps.onChange = onChange;
	}

	if (refInput) {
		checkboxProps.ref = refInput;
	}

	if (required) {
		checkboxProps.required = required;
	}

	if (value) {
		checkboxProps.value = value;
	}

	return (
		<div className={`${classNames}checkbox${modNames}`}>
			<div className="checkbox__wrapper">
				<input className="checkbox__checkbox" type="checkbox" {...checkboxProps} />
				<div className="checkbox__icon">
					<IconCheck />
				</div>
			</div>
			<Label classes={['checkbox__label']} id={id}>
				{label}
			</Label>
		</div>
	);
};

export default Checkbox;
