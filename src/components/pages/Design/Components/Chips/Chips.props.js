const props = [
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the alert',
	},
	{
		prop: 'label',
		type: 'String',
		description: 'The label for the chip',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the alert',
	},
	{
		prop: 'onDelete',
		type: 'Function',
		description: 'A function that runs when the chip is deleted',
		notes: '"type" prop is ignored when set',
	},
	{
		prop: 'type',
		type: 'String',
		description: 'The type of chip',
		notes: 'info | success | error | warning',
	},
];

export default props;
