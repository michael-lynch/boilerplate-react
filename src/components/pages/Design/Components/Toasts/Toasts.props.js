const props = [
	{
		prop: 'action',
		type: 'Object',
		description: 'An object with <Button> properties',
	},
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the toast',
	},
	{
		prop: 'isOpen',
		type: 'Boolean',
		description: 'A boolean that opens and closes the toast',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the toast',
	},
	{
		prop: 'onClose',
		type: 'Function',
		description: 'A function that runs when the toast is closed',
	},
	{
		prop: 'position',
		type: 'String',
		description: 'topLeft | topRight | bottomLeft | bottomRight',
	},
	{
		prop: 'text',
		type: 'String',
		description: 'The text to be displayed inside the toast',
	},
	{
		prop: 'type',
		type: 'String',
		description: 'error | info | success | warning',
	},
];

export default props;
