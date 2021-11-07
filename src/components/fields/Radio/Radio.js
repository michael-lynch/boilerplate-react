// fields
import Label from 'components/fields/Label/Label';

// styles
import './Radio.css';

const Radio = ({
	checked,
	classes,
	disabled,
	id,
	label,
	mods,
	name,
	onChange,
	refInput,
	required,
	value,
}) => {
	// vars
	const radioProps = {};

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
		radioProps.checked = checked;
	}

	if (disabled) {
		modNames += ' radio--disabled';
		radioProps.disabled = disabled;
	}

	if (id) {
		radioProps.id = id;
	}

	if (name) {
		radioProps.name = name;
	}

	if (onChange) {
		radioProps.onChange = onChange;
	}

	if (refInput) {
		radioProps.ref = refInput;
	}

	if (required) {
		radioProps.required = required;
	}

	if (value) {
		radioProps.value = value;
	}

	return (
		<div className={`${classNames}radio${modNames}`}>
			<div className="radio__wrapper">
				<input className="radio__radio" type="radio" {...radioProps} />
			</div>
			<Label classes={['radio__label']} id={id}>
				{label}
			</Label>
		</div>
	);
};

export default Radio;
