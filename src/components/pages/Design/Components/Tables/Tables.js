// pages
import Docs from 'components/pages/Design/Components/Docs/Docs';
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Code from 'components/ui/Code/Code';
import Table from 'components/ui/Table/Table';
import Typography from 'components/ui/Typography/Typography';

// headers
import headers from './Tables.headers';

// data
import data from './Tables.data';

// docs
import dataProps from './Tables.props.js';
import dataMods from './Tables.mods.js';

// code
import code from './Tables.code.txt';

// styles
import './Tables.css';

const Tables = () => {
	const renderExpandableRow = (item) => {
		return (
			<div className="tables__expandedcontent">You can render anything in this expanded row.</div>
		);
	};

	return (
		<Section classes={['tables']} id="table">
			<Wrapper>
				<Subtitle component="h1">Table</Subtitle>
				<Typography>Tables are used to display tabular data in columns and rows.</Typography>

				<div className="tables__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Basic
						</Typography>
						<Table classes={['tables__table']} data={data} headers={headers} />
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Striped
						</Typography>
						<Table classes={['tables__table']} data={data} headers={headers} mods={['striped']} />
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Border
						</Typography>
						<Table classes={['tables__table']} data={data} headers={headers} mods={['border']} />
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Expandable
						</Typography>
						<Table
							classes={['tables__table']}
							data={data}
							headers={headers}
							mods={['border', 'striped']}
							renderExpandableRow={renderExpandableRow}
						/>
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Secondary
						</Typography>
						<Table classes={['tables__table']} data={data} headers={headers} mods={['secondary']} />
					</div>

					<div>
						<Typography classes={['h4']} component="h3">
							Code
						</Typography>
						<Code code={code} />
					</div>

					<div>
						<Docs dataMods={dataMods} dataProps={dataProps} />
					</div>
				</div>
			</Wrapper>
		</Section>
	);
};

export default Tables;
