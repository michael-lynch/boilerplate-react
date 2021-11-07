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
		notes: 'Defaults to a <p> tag',
	},
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the element',
		notes: 'Optionally override default header styles with "h1", "h2", "h3" etc. classes',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the element',
	},
];

export default props;
