import React, { useEffect, useRef, useState } from 'react';

// fields
import Checkbox from 'components/fields/Checkbox/Checkbox';
import Input from 'components/fields/Input/Input';

// icons
import { ReactComponent as IconKeyboardArrowDown } from 'icons/material/keyboard-arrow-down.svg';

// styles
import './Select.css';

const Select = ({ ariaLabel, classes, disabled, mods, multiple, onChange, options, placeholder }) => {
	// refs
	const refInput = useRef();

	// state
	const [values, setValues] = useState([]);

	// vars
	let classNames = '';
	let modNames = '';

	// multiple handler
	const handleChangeCheckbox = (e) => {
		// clone values
		const newValues = [...values];

		let newValue = '';

		if (e.target.checked) {
			// add value to array
			newValues.push(e.target.value);
		} else {
			// remove value from array
			const index = newValues.indexOf(e.target.value);
			newValues.splice(index, 1);
		}

		// set input value
		if (newValues.length) {
			const labels = newValues.map((val) => {
				const optionFound = options.find((opt) => opt.value === val);
				return optionFound.label;
			});

			newValue = labels.join(', ');
		}
		refInput.current.value = newValue;

		// set values
		setValues(newValues);
	};

	// single handler
	const handleClickOption = (option) => {
		refInput.current.value = option.label;

		if (onChange) {
			onChange(option.value);
		}
	};

	const renderOptions = () => {
		return options.map((option) => {
			if (multiple) {
				return (
					<li className="list__item" key={`select-checkbox-${option.value}`}>
						<Checkbox
							id={`select-option-${option.value}`}
							label={option.label}
							onChange={handleChangeCheckbox}
							value={option.value}
						/>
					</li>
				);
			}

			return (
				<li className="list__item" key={`select-checkbox-${option.value}`}>
					<button className="item__btn" onClick={(e) => handleClickOption(option)}>
						{option.label}
					</button>
				</li>
			);
		});
	};

	// run onChange when values changes
	useEffect(() => {
		if (onChange) {
			onChange(values);
		}
	}, [onChange, values]);

	useEffect(() => {
		if (disabled) {
			if (refInput.current) {
				refInput.current.value = options[0].label;
			}
		}
	}, [disabled, options, refInput]);

	if (!options) {
		return false;
	}

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` select--${mods[i]}`;
		}
	}

	if (multiple) {
		modNames += ' select--multiple';
	}
	return (
		<div className={`${classNames}select${modNames}`}>
			<div className="select__wrapper">
				<Input
					ariaLabel={ariaLabel}
					classes={['select__input']}
					disabled={disabled}
					placeholder={placeholder}
					refInput={refInput}
					readOnly={true}
				/>
				<div className="select__icon">
					<IconKeyboardArrowDown />
				</div>
			</div>
			<ul className="select__list">{renderOptions()}</ul>
		</div>
	);
};

export default Select;
