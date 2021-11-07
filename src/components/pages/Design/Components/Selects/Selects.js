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
import Select from 'components/fields/Select/Select';
import SelectNative from 'components/fields/SelectNative/SelectNative';

// options
import {
	optionsSelect,
	optionsSelectDisabled,
	optionsSelectMultiple,
} from 'components/pages/Design/Components/Selects/Selects.options';

// docs
import dataProps from './Selects.props.js';

// code
import code from './Selects.code.txt';

// styles
import './Selects.css';

const Forms = () => {
	return (
		<Section classes={['selects']} id="select">
			<Wrapper>
				<Subtitle component="h1">Select</Subtitle>
				<Typography>
					Selects are used for collecting user provided information from a list of options.
				</Typography>

				<div className="selects__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>
						<ul className="selects__list">
							<li>
								<SelectNative
									ariaLabel="Native Select"
									onChange={(e) => console.log(e.target.value)}
									options={optionsSelect}
									placeholder="Select"
								/>
							</li>
							<li>
								<Select
									ariaLabel="Select Options"
									onChange={(value) => console.log(value)}
									options={optionsSelect}
									placeholder="Select"
								/>
							</li>
							<li>
								<Select
									ariaLabel="Select Multiple Options"
									multiple={true}
									onChange={(values) => console.log(values)}
									options={optionsSelectMultiple}
									placeholder="Select Multiple"
								/>
							</li>
							<li>
								<Select ariaLabel="Disabled" disabled={true} options={optionsSelectDisabled} />
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

export default Forms;
