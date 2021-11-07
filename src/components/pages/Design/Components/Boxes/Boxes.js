// pages
import Docs from 'components/pages/Design/Components/Docs/Docs';
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Box from 'components/ui/Box/Box';
import Code from 'components/ui/Code/Code';
import Typography from 'components/ui/Typography/Typography';

// docs
import dataProps from './Boxes.props.js';
import dataMods from './Boxes.mods.js';

// code
import code from './Boxes.code.txt';

// styles
import './Boxes.css';

const Boxes = () => {
	return (
		<Section classes={['boxes']} id="box">
			<Wrapper>
				<Subtitle component="h1">Box</Subtitle>
				<Typography>Boxes are used to contain sections of content.</Typography>

				<div className="boxes__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>

						<ul className="boxes__list">
							<li>
								<Box mods={['padding', 'border']}>Border Box</Box>
							</li>
							<li>
								<Box mods={['padding', 'shadow']}>Shadow Box</Box>
							</li>
							<li>
								<Box mods={['padding', 'grey', 'border']}>Grey Box</Box>
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

export default Boxes;
