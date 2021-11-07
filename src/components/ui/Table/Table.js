import React from 'react';

// icons
import { ReactComponent as IconUnfoldLess } from 'icons/material/unfold-less.svg';
import { ReactComponent as IconUnfoldMore } from 'icons/material/unfold-more.svg';

// styles
import './Table.css';

const Table = ({ classes, data, headers, mods, renderExpandableRow }) => {
	// vars
	let classNames = '';
	let modNames = '';

	const renderHeaders = () => {
		return headers.map((header) => {
			return (
				<th className="table__th" key={`table-header-${header.value}`}>
					{header.text}
				</th>
			);
		});
	};

	const renderCell = (header, value, item) => {
		if (header.render) {
			return header.render(value, item);
		}

		return value;
	};

	const renderIconPreset = (type) => {
		if (renderExpandableRow && type === 'unfold') {
			return (
				<td className="table__td table__td--icon">
					<div className="td__unfoldmore">
						<IconUnfoldMore />
					</div>
					<div className="td__unfoldless">
						<IconUnfoldLess />
					</div>
				</td>
			);
		}

		return false;
	};

	const renderRows = () => {
		return data.map((item, indexData) => {
			const trProps = {};

			const cells = headers.map((header, indexHeader) => {
				return (
					<td className="table__td" key={`table-cell-item-${indexData}-${header.value}`}>
						{renderCell(header, item[header.value], item)}
					</td>
				);
			});

			const renderExpanded = () => {
				if (renderExpandableRow) {
					return (
						<tr
							aria-expanded="false"
							aria-label="Expandable Row"
							className="table__tr table__tr--expandedcontent"
							tabIndex="0">
							<td className="table__td" colSpan={headers.length + 1}>
								{renderExpandableRow(item)}
							</td>
						</tr>
					);
				}

				return false;
			};

			// expandable row click event
			if (renderExpandableRow) {
				// get all rows
				const rows = document.getElementsByClassName('table__tr');

				const handleToggleRow = (e) => {
					const el = e.currentTarget;
					const elSibling = e.currentTarget.nextSibling;

					if (e.currentTarget.classList.contains('table__tr--active')) {
						// remove active and expanded classes to selected row and sibling
						el.classList.remove('table__tr--active');
						elSibling.classList.remove('table__tr--expanded');
						elSibling.setAttribute('aria-expanded', false);
					} else {
						// remove dynamic classes from all rows
						for (var i = 0; i < rows.length; i++) {
							rows[i].classList.remove('table__tr--expanded', 'table__tr--active');
						}

						// add active and expanded classes to selected row and sibling
						el.classList.add('table__tr--active');
						elSibling.classList.add('table__tr--expanded');
						elSibling.setAttribute('aria-expanded', true);
					}
				};

				// row click event
				trProps.onClick = handleToggleRow;

				// row keyboard event
				trProps.onKeyPress = (e) => {
					// if "enter" button
					if (e.charCode === 13) {
						handleToggleRow(e);
					}
				};
			}

			return (
				<React.Fragment key={`table-row-${indexData}`}>
					<tr className="table__tr" tabIndex="0" {...trProps}>
						{cells}
						{renderIconPreset('unfold')}
					</tr>
					{renderExpanded()}
				</React.Fragment>
			);
		});
	};

	const renderHeaderIcon = () => {
		if (!renderExpandableRow) {
			return false;
		}

		return <th className="table__th table__th--icon">&nbsp;</th>;
	};

	if (!headers) {
		return false;
	}

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` table--${mods[i]}`;
		}
	}

	if (renderExpandableRow) {
		modNames += ` table--expandable`;
	}

	return (
		<div className={`${classNames}table${modNames}`}>
			<div className="table__mask">
				<table className="table__table">
					<thead>
						<tr tabIndex="0">
							{renderHeaders()}
							{renderHeaderIcon()}
						</tr>
					</thead>
					<tbody>{renderRows()}</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
