// ui
import Typography from 'components/ui/Typography/Typography';

const headers = [
	{
		text: 'Prop',
		value: 'prop',
	},
	{
		text: 'Type',
		value: 'type',
		render: (value) => {
			return <span className="docs__type">{value}</span>;
		},
	},
	{
		text: 'Description',
		value: 'description',
		render: (value, item) => {
			const renderNotes = () => {
				if (item.notes) {
					return (
						<Typography classes={['docs__notes']} component="div">
							{item.notes}
						</Typography>
					);
				}
			};
			return (
				<>
					<Typography component="div">{value}</Typography>
					{renderNotes()}
				</>
			);
		},
	},
];

export default headers;
