import React, { useState } from 'react';

// router
import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import Brand from 'components/pages/Design/Brand/Brand';
import Components from 'components/pages/Design/Components/Components';

// ui
import Header from 'components/ui/Header/Header';
import Nav from 'components/ui/Nav/Nav';

// icons
import { ReactComponent as IconFingerprint } from 'icons/material/fingerprint.svg';
import { ReactComponent as IconWeb } from 'icons/material/web.svg';

// styles
import './Design.css';

const Design = () => {
	// state
	const [isNavOpen, setIsNavOpen] = useState(false);

	// vars
	const navItems = [
		{
			icon: <IconFingerprint />,
			label: 'Brand Guidelines',
			url: '/design/brand',
			children: [
				{
					label: 'Typography',
					url: '#typography',
				},
				{
					label: 'Colors',
					url: '#colors',
				},
			],
		},
		{
			icon: <IconWeb />,
			label: 'Components',
			url: '/design/components',
			children: [
				{
					label: 'Alert',
					url: '/design/components/alert',
				},
				{
					label: 'Box',
					url: '/design/components/box',
				},
				{
					label: 'Button',
					url: '/design/components/button',
				},
				{
					label: 'Card',
					url: '/design/components/card',
				},
				{
					label: 'Checkbox',
					url: '/design/components/checkbox',
				},
				{
					label: 'Chip',
					url: '/design/components/chip',
				},
				{
					label: 'Dialog',
					url: '/design/components/dialog',
				},
				{
					label: 'Input',
					url: '/design/components/input',
				},
				{
					label: 'Label',
					url: '/design/components/label',
				},
				{
					label: 'Radio',
					url: '/design/components/radio',
				},
				{
					label: 'Section',
					url: '/design/components/section',
				},
				{
					label: 'Select',
					url: '/design/components/select',
				},
				{
					label: 'Table',
					url: '/design/components/table',
				},
				{
					label: 'Tabs',
					url: '/design/components/tabs',
				},
				{
					label: 'Toast',
					url: '/design/components/toast',
				},
				{
					label: 'Typography',
					url: '/design/components/typography',
				},
				{
					label: 'Wrapper',
					url: '/design/components/wrapper',
				},
			],
		},
	];

	return (
		<main>
			<div className="design">
				<Header setIsNavOpen={setIsNavOpen} />
				<Nav isOpen={isNavOpen} items={navItems} setIsNavOpen={setIsNavOpen} />
				<div className="design__page">
					<Switch>
						<Route path="/design/brand">
							<Brand />
						</Route>
						<Route path="/design/components/:component?">
							<Components />
						</Route>
						<Redirect to="/design/brand" />
					</Switch>
				</div>
			</div>
		</main>
	);
};

export default Design;
