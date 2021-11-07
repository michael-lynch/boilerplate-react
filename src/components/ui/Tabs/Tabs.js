import React, { useEffect, useState } from 'react';

// styles
import './Tabs.css';

const Tabs = ({ classes, defaultTab, mods, tabs = [] }) => {
	// state
	const [activeTab, setActiveTab] = useState(tabs[0]);

	// vars
	let classNames = '';
	let modNames = '';

	const tabValues = tabs?.map((tab) => tab.value);

	// handlers
	const handleClickTab = (e, tab) => {
		setActiveTab(tab);
	};

	const renderTabs = () => {
		return tabs.map((tab, index) => {
			const isActive = tab.value === activeTab.value;
			let tabMods = '';

			if (isActive) {
				tabMods += ' tabs__tab--active';
			}

			return (
				<button
					aria-controls={`tabpanel-${tab.value}`}
					aria-selected={isActive}
					className={`tabs__tab${tabMods}`}
					id={`tab-${tab.value}`}
					key={`tabs-tab-${tab.value}`}
					onClick={(e) => handleClickTab(e, tab)}
					role="tab">
					{tab.icon && <span className="tab__icon">{tab.icon}</span>}
					<span className="tab__text">{tab.text}</span>
				</button>
			);
		});
	};

	// set active tab
	useEffect(() => {
		// hide all panel
		for (let i = 0; i < tabValues.length; i++) {
			document.querySelector(`.tabpanel--${tabValues[i]}`).setAttribute('hidden', true);
		}

		// show active panel
		document.querySelector(`.tabpanel--${activeTab.value}`).removeAttribute('hidden');
	}, [activeTab, tabValues]);

	// set default tab
	useEffect(() => {
		if (defaultTab) {
			const newActiveTab = tabs.find((tab) => tab.value === defaultTab);

			if (newActiveTab) {
				setActiveTab(newActiveTab);
			}
		}
	}, [defaultTab, tabs]);

	if (!tabs.length) {
		return false;
	}

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` tabs--${mods[i]}`;
		}
	}

	return (
		<div className={`${classNames}tabs${modNames}`}>
			<div className="tabs__list" role="tablist">{renderTabs()}</div>
		</div>
	);
};

export default Tabs;
