// pages
import Docs from 'components/pages/Design/Components/Docs/Docs';
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Code from 'components/ui/Code/Code';
import Typography from 'components/ui/Typography/Typography';

// fields
import Checkbox from 'components/fields/Checkbox/Checkbox';

// docs
import dataProps from './Checkboxes.props.js';

// code
import code from './Checkboxes.code.txt';

// styles
import './Checkboxes.css';

const Checkboxes = () => {
	return (
		<Section classes={['checkboxes']} id="checkbox">
			<Wrapper>
				<Subtitle component="h1">Checkbox</Subtitle>
				<Typography>Checkboxes allow the user to select one or more items from a set.</Typography>

				<div className="checkboxes__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>
						<ul className="checkboxes__list">
							<li>
								<Checkbox id="sample-checkbox" label="Item A" />
							</li>
							<li>
								<Checkbox id="sample-checkbox-b" label="Item B" />
							</li>
							<li>
								<Checkbox disabled={true} id="sample-checkbox-c" label="Disabled" />
							</li>
							<li>
								<Checkbox
									checked={true}
									disabled={true}
									id="sample-checkbox-d"
									label="Disabled Checked"
								/>
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
						<Docs dataProps={dataProps} />
					</div>
				</div>
			</Wrapper>
		</Section>
	);
};

export default Checkboxes;
