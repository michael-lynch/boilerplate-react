// ui
import Table from 'components/ui/Table/Table';
import Typography from 'components/ui/Typography/Typography';

// headers
import headersProps from './Docs.headers.props';
import headersMods from './Docs.headers.mods';

// styles
import './Docs.css';

const Docs = ({ dataMods = [], dataProps = [] }) => {
	return (
		<div className="docs">
			{dataProps.length > 0 && (
				<div>
					<Typography classes={['h4']} component="h3">
						Props
					</Typography>

					<Table data={dataProps} headers={headersProps} />
				</div>
			)}

			{dataMods.length > 0 && (
				<div>
					<Typography classes={['h4']} component="h3">
						Modifiers
					</Typography>

					<Table data={dataMods} headers={headersMods} />
				</div>
			)}
		</div>
	);
};

export default Docs;
