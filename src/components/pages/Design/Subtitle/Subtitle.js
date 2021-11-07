// ui
import Typography from 'components/ui/Typography/Typography';

// styles
import './Subtitle.css';

const Subtitle = ({ children, component }) => {
	return (
		<Typography classes={['subtitle', 'h2']} component={component || 'h2'}>
			{children}
		</Typography>
	);
};

export default Subtitle;
