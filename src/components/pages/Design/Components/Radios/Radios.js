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
import Radio from 'components/fields/Radio/Radio';

// docs
import dataProps from './Radios.props.js';

// code
import code from './Radios.code.txt';

// styles
import './Radios.css';

const Radios = () => {
	return (
		<Section classes={['radios']} id="radio">
			<Wrapper>
				<Subtitle component="h1">Radio</Subtitle>
				<Typography>Radio buttons allow the user to select one option from a set.</Typography>

				<div className="radios__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>
						<ul className="radios__list">
							<li>
								<Radio id="sample-radio" label="Item A" name="sample-radio-group" />
							</li>
							<li>
								<Radio id="sample-radio-b" label="Item B" name="sample-radio-group" />
							</li>
							<li>
								<Radio
									disabled={true}
									id="sample-radio-c"
									label="Disabled"
									name="sample-radio-group"
								/>
							</li>
							<li>
								<Radio
									checked={true}
									disabled={true}
									id="sample-radio-d"
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

export default Radios;
