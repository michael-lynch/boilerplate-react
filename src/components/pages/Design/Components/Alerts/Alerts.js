// router
import { Link } from 'react-router-dom';

// pages
import Docs from 'components/pages/Design/Components/Docs/Docs';
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Alert from 'components/ui/Alert/Alert';
import Code from 'components/ui/Code/Code';
import Typography from 'components/ui/Typography/Typography';

// docs
import dataProps from './Alerts.props.js';
import dataMods from './Alerts.mods.js';

// code
import code from './Alerts.code.txt';

// styles
import './Alerts.css';

const Alerts = () => {
	return (
		<Section classes={['alerts']} id="alert">
			<Wrapper>
				<Subtitle component="h1">Alert</Subtitle>
				<Typography>
					Alerts provide users contextual feedback messages, similar to a{' '}
					<Link to="/design/components/toast">Toast</Link> but inline.
				</Typography>

				<div className="alerts__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>

						<ul className="alerts__list">
							<li>
								<Alert>This is a default info alert.</Alert>
							</li>
							<li>
								<Alert type="success">This is a success alert.</Alert>
							</li>
							<li>
								<Alert type="error">This is an error alert.</Alert>
							</li>
							<li>
								<Alert type="warning">This is a warning alert.</Alert>
							</li>
						</ul>
					</div>

					<div>
						<Typography classes={['h4']} component="h3">
							Outline
						</Typography>

						<ul className="alerts__list">
							<li>
								<Alert mods={['outline']}>This is a default info alert.</Alert>
							</li>
							<li>
								<Alert mods={['outline']} type="success">
									This is a success alert.
								</Alert>
							</li>
							<li>
								<Alert mods={['outline']} type="error">
									This is an error alert.
								</Alert>
							</li>
							<li>
								<Alert mods={['outline']} type="warning">
									This is a warning alert.
								</Alert>
							</li>
						</ul>
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

export default Alerts;
