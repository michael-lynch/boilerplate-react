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
import Input from 'components/fields/Input/Input';

// icons
import { ReactComponent as IconPerson } from 'icons/material/person.svg';

// docs
import dataProps from './Inputs.props.js';

// code
import code from './Inputs.code.txt';

// styles
import './Inputs.css';

const Inputs = () => {
	return (
		<Section classes={['inputs']} id="input">
			<Wrapper>
				<Subtitle component="h1">Input</Subtitle>
				<Typography>Inputs let users enter and edit text, numbers and dates.</Typography>

				<div className="inputs__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>
						<ul className="inputs__list">
							<li>
								<Input placeholder="Text Field" required={true} />
							</li>
							<li>
								<Input iconStart={<IconPerson />} placeholder="Start Icon" required={true} />
							</li>
							<li>
								<Input iconEnd={<IconPerson />} placeholder="End Icon" required={true} />
							</li>
							<li>
								<Input helper="Some helper text" placeholder="Text Field" required={true} />
							</li>
							<li>
								<Input error="Some error text" placeholder="Error" />
							</li>
							<li>
								<Input disabled={true} placeholder="Disabled" />
							</li>
							<li>
								<Input placeholder="Number" type="number" />
							</li>
							<li>
								<Input placeholder="Date" type="date" />
							</li>
							<li>
								<Input placeholder="Week" type="week" />
							</li>
							<li>
								<Input placeholder="Month" type="month" />
							</li>
							<li>
								<Input placeholder="Time" type="time" />
							</li>
							<li>
								<Input placeholder="File" type="file" />
							</li>
							<li>
								<Input placeholder="Email" type="email" />
							</li>
							<li>
								<Input placeholder="Search" type="search" />
							</li>
							<li>
								<Input placeholder="Phone" type="tel" />
							</li>
							<li>
								<Input placeholder="Password" type="password" />
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

export default Inputs;
