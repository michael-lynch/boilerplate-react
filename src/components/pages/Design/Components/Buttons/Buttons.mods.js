const mods = [
	{
		mod: 'backward',
		description: 'Adds the backward arrow to the button',
	},
	{
		mod: '[color]',
		description: 'Changes the background color of the button',
		notes:
			'Any color from the palette can be chosen (i.e. "amber-600", "green-800", "light-blue-700")',
	},
	{
		mod: 'forward',
		description: 'Adds the forward arrow to the button',
	},
	{
		mod: 'full',
		description: 'Makes the button full width',
	},
	{
		mod: 'icon',
		description: 'Applies the icon style to the button',
	},
	{
		mod: 'transparent',
		description: 'Removes the background color from the button',
		notes: 'Only applies when "icon" modifier is used',
	},
	{
		mod: 'sm',
		description: 'Makes the button smaller',
	},
	{
		mod: 'straight',
		description: 'Removes the border radius from the button',
	},
	{
		mod: 'text',
		description: 'Applies the text style to the button',
	},
];

export default mods;
