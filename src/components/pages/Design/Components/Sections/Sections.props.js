const props = [
	{
		prop: 'children',
		type: 'Node',
		description: 'The content of the element',
	},
	{
		prop: 'component',
		type: 'String',
		description: 'The HTML tag for the element',
		notes: 'Defaults to a <section> tag',
	},
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the element',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the element',
	},
];

export default props;
