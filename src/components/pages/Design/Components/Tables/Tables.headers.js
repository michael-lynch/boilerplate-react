// icons
import { ReactComponent as IconInfo } from 'icons/material/info.svg';

const headers = [
	{
		text: 'Model',
		value: 'model',
	},
	{
		text: 'Project',
		value: 'project',
	},
	{
		text: 'Stage',
		value: 'stage',
	},
	{
		text: 'Time Spent',
		value: 'time',
		render: (value, item) => {
			if (value > 50) {
				return (
					<div className="tables__highlight">
						<div className="highlight__text">{value} Hours</div>
						<IconInfo />
					</div>
				);
			}

			return `${value} Hours`;
		},
	},
];

export default headers;
