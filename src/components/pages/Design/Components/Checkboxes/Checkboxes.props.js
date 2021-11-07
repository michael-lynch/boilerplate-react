const props = [
	{
		prop: 'checked',
		type: 'Boolean',
		description: 'A boolean to check the checkbox',
	},
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the checkbox',
	},
	{
		prop: 'disabled',
		type: 'Boolean',
		description: 'A boolean to disable the checkbox',
	},
	{
		prop: 'id',
		type: 'String',
		description: 'An ID for the checkbox',
	},
	{
		prop: 'label',
		type: 'String',
		description: 'The checkbox label text',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the checkbox',
	},
	{
		prop: 'onChange',
		type: 'Function',
		description: 'A function that runs when the checkbox is checked or unchecked',
		notes: 'Required for controlled checkboxes',
	},
	{
		prop: 'refInput',
		type: 'Ref',
		description: 'A ref applied to the checkbox',
		notes: 'Required for uncontrolled radio buttons',
	},
	{
		prop: 'required',
		type: 'Boolean',
		description: 'A boolean to make the checkbox required',
	},
	{
		prop: 'value',
		type: 'Any',
		description: 'The value of the checkbox',
		notes: 'Required for controlled checkboxes',
	},
];

export default props;
