const props = [
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the alert',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the alert',
	},
	{
		prop: 'onClose',
		type: 'Function',
		description: 'A function that runs when the alert is closed',
	},
	{
		prop: 'type',
		type: 'String',
		description: 'The type of alert',
		notes: 'info | success | error | warning',
	},
];

export default props;
