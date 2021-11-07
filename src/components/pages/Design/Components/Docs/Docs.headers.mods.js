// ui
import Typography from 'components/ui/Typography/Typography';

const headers = [
	{
		text: 'Modifier',
		value: 'mod',
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
