const props = [
	{
		prop: 'checked',
		type: 'Boolean',
		description: 'A boolean to check or uncheck the radio button',
	},
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the radio button',
	},
	{
		prop: 'disabled',
		type: 'Boolean',
		description: 'A boolean to disable the radio button',
	},
	{
		prop: 'id',
		type: 'String',
		description: 'An ID for the radio button',
	},
	{
		prop: 'label',
		type: 'String',
		description: 'The label text for the radio button',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the radio button',
	},
	{
		prop: 'onChange',
		type: 'Function',
		description: 'A function that runs when the checkbox value changes',
		notes: 'Required for controlled radio buttons',
	},
	{
		prop: 'refInput',
		type: 'Ref',
		description: 'A ref that is applied to the checkbox',
		notes: 'Required for uncontrolled radio buttons',
	},
	{
		prop: 'required',
		type: 'Boolean',
		description: 'A boolean used to make the radio button required',
	},
	{
		prop: 'value',
		type: 'Any',
		description: 'The value of the radio button',
		notes: 'Required for controlled radio buttons',
	},
];

export default props;
