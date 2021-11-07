const props = [
	{
		prop: 'btns',
		type: 'Array',
		description: 'An array of objects that use <Button> properties',
	},
	{
		prop: 'children',
		type: 'Node',
		description: 'The content for the dialog',
	},
	{
		prop: 'classes',
		type: 'Array',
		description: 'A list of classes to apply to the dialog',
	},
	{
		prop: 'content',
		type: 'String',
		description: 'The content for the dialog',
	},
	{
		prop: 'handleClose',
		type: 'Function',
		description: 'A function that runs when the dialog close button is clicked',
	},
	{
		prop: 'hasCloseBtn',
		type: 'Boolean',
		description: 'A boolean that shows or hides the close button',
	},
	{
		prop: 'hasOverlayClose',
		type: 'Boolean',
		description: 'A boolean that enables or disables the close event when the overlay is clicked',
	},
	{
		prop: 'isOpen',
		type: 'Boolean',
		description: 'A boolean that opens and closes the dialog',
	},
	{
		prop: 'mods',
		type: 'Array',
		description: 'A list of modifiers to apply to the dialog',
	},
	{
		prop: 'title',
		type: 'String',
		description: 'The title of the dialog',
	},
];

export default props;
