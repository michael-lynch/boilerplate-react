const props = [
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the input',
	},
	{
		prop: 'defaultValue',
		type: 'Any',
		description: 'The default value for the input',
	},
	{
		prop: 'disabled',
		type: 'Boolean',
		description: 'A boolean that disables the input',
	},
	{
		prop: 'error',
		type: 'String',
		description: 'An error message to display below the input',
	},
	{
		prop: 'helper',
		type: 'String',
		description: 'Some text that will be displayed below the input',
	},
	{
		prop: 'iconEnd',
		type: 'Node',
		description: 'An icon that will be displayed on the right side of the input',
	},
	{
		prop: 'iconStart',
		type: 'Node',
		description: 'An icon that will be displayed on the left side of the input',
	},
	{
		prop: 'id',
		type: 'String',
		description: 'An ID for the input',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the input',
	},
	{
		prop: 'name',
		type: 'String',
		description: 'A name for the input',
	},
	{
		prop: 'onChange',
		type: 'Function',
		description: 'A function that runs when the value of the input changes',
		notes: 'Required for controlled inputs',
	},
	{
		prop: 'placeholder',
		type: 'String',
		description: 'Placeholder text for the input',
	},
	{
		prop: 'readOnly',
		type: 'Boolean',
		description: 'A boolean to make the input read-only',
	},
	{
		prop: 'refInput',
		type: 'Ref',
		description: 'A ref that is applied to the input',
		notes: 'Required for uncontrolled inputs',
	},
	{
		prop: 'required',
		type: 'Boolean',
		description: 'A boolean to make the input required',
	},
	{
		prop: 'type',
		type: 'Type',
		description: 'The type of input',
		notes: 'Must be a valid HTML input type',
	},
	{
		prop: 'value',
		type: 'Any',
		description: 'The value of the input',
		notes: 'Required for controlled inputs',
	},
];

export default props;
