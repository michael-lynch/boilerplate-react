const props = [
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the tabs',
	},
	{
		prop: 'defaultTab',
		type: 'String',
		description: 'The value of the default tab',
		notes: 'Defaults to the first tab',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the tabs',
	},
	{
		prop: 'tabs',
		type: 'Array',
		description: 'An array of tab objects that have "icon", "text" and "value" properties',
	},
];

export default props;
