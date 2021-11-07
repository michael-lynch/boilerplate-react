// ui
import Typography from 'components/ui/Typography/Typography';

// styles
import './Swatch.css';

const Swatch = ({ hex, name }) => {
	return (
		<div className="swatch">
			<div className="swatch__color" style={{ backgroundColor: hex }}></div>
			<Typography component="div" classes={['swatch__name']}>
				{name}
			</Typography>
			<Typography component="div" classes={['swatch__hex']}>
				{hex}
			</Typography>
		</div>
	);
};

export default Swatch;
