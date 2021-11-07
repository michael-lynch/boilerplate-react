const props = [
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the button',
	},
	{
		prop: 'component',
		type: 'Node',
		description: 'The HTML tag of the button',
	},
	{
		prop: 'disabled',
		type: 'Boolean',
		description: 'A boolean to disable the button',
	},
	{
		prop: 'form',
		type: 'String',
		description: 'An ID of a form that the button should submit',
	},
	{
		prop: 'href',
		type: 'String',
		description: 'A url that the button should go to',
	},
	{
		prop: 'icon',
		type: 'Node',
		description: 'An icon for the button',
	},
	{
		prop: 'iconEnd',
		type: 'Node',
		description: 'An icon displayed after the button text',
	},
	{
		prop: 'iconStart',
		type: 'Node',
		description: 'An icon displayed before the button text',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the button',
	},
	{
		prop: 'onClick',
		type: 'Function',
		description: 'A function that runs when the button is clicked',
	},
	{
		prop: 'target',
		type: 'String',
		description: 'An anchor target for the button',
	},
	{
		prop: 'text',
		type: 'String',
		description: 'The button text',
	},
	{
		prop: 'type',
		type: 'String',
		description: 'The type of button',
	},
];

export default props;
