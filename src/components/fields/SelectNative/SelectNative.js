// icons
import { ReactComponent as IconKeyboardArrowDown } from 'icons/material/keyboard-arrow-down.svg';

// styles
import './SelectNative.css';

const SelectNative = ({ ariaLabel, classes, disabled, mods, onChange, options, refSelect, value }) => {
	// vars
	const selectNativeProps = {};

	let classNames = '';
	let modNames = '';

	const renderOptions = () => {
		if (!options) {
			return false;
		}

		return options.map((option) => {
			return (
				<option key={`selectnative-option-${option.value}`} value={option.value}>
					{option.label}
				</option>
			);
		});
	};

	if (ariaLabel) {
		selectNativeProps['aria-label'] = ariaLabel;
	}

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

	if (disabled) {
		modNames += ' selectnative--disabled';
		selectNativeProps.disabled = disabled;
	}

	if (onChange) {
		selectNativeProps.onChange = onChange;
	}

	if (refSelect) {
		selectNativeProps.ref = refSelect;
	}

	if (value) {
		selectNativeProps.value = value;
	}

	if (!options) {
		return false;
	}

	return (
		<div className={`${classNames}selectnative${modNames}`}>
			<select className="selectnative__select" {...selectNativeProps}>
				{renderOptions()}
			</select>
			<div className="selectnative__icon">
				<IconKeyboardArrowDown />
			</div>
		</div>
	);
};

export default SelectNative;
