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
import Label from 'components/fields/Label/Label';

// docs
import dataProps from './Labels.props.js';

// code
import code from './Labels.code.txt';

// styles
import './Labels.css';

const Labels = () => {
	return (
		<Section classes={['labels']} id="label">
			<Wrapper>
				<Subtitle component="h1">Label</Subtitle>
				<Typography>Labels describe and identify form elements.</Typography>

				<div className="labels__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>
						<ul className="labels__list">
							<li>
								<Label id="login-email">Label</Label>
								<Input
									id="login-email"
									placeholder="Enter your email"
									required={true}
									type="email"
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

export default Labels;
