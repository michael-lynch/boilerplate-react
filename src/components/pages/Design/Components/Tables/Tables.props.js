const props = [
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the table',
	},
	{
		prop: 'data',
		type: 'Array',
		description: 'An array of objects to display as table rows',
	},
	{
		prop: 'headers',
		type: 'Array',
		description:
			'An array of objects with "text" and "value" properties that define the table headers.',
		notes:
			'Objects can optionally include a "render" property to custom render the data in that column',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the table',
	},
	{
		prop: 'renderExpandableRow',
		type: 'Function',
		description: 'A function that renders expandable rows',
	},
];

export default props;
