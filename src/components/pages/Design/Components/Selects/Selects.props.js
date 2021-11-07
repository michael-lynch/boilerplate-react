const props = [
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the select',
	},
	{
		prop: 'disabled',
		type: 'Boolean',
		description: 'A boolean that disables the input',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the select',
	},
	{
		prop: 'multiple',
		type: 'Boolean',
		description: 'A boolean that enables the select to have multiple values',
	},
	{
		prop: 'onChange',
		type: 'Function',
		description: 'A function that runs when the value of the select changes',
	},
	{
		prop: 'options',
		type: 'Array',
		description: 'An array of objects that have "label" and "value" properties',
	},
	{
		prop: 'placeholder',
		type: 'String',
		description: 'Placeholder text for the select',
	},
];

export default props;
