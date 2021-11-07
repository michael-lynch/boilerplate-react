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
import dataMods from './Wrappers.mods.js';
import dataProps from './Wrappers.props.js';

// code
import code from './Wrappers.code.txt';

// styles
import './Wrappers.css';

const Wrappers = () => {
	return (
		<Section classes={['wrappers']} id="wrapper">
			<Section component="div" mods={['paddingbottom']}>
				<Wrapper>
					<Subtitle component="h1">Wrapper</Subtitle>
					<Typography>
						Wrappers are used to constrain content to a max width (1400px). They can also be used to
						set 12 a column grid, which is generally used for the layout of a page or section.
					</Typography>

					<div className="wrappers__wrappers">
						<div>
							<Typography classes={['wrappers__examples', 'h4']} component="h3">
								Examples
							</Typography>
						</div>
					</div>
				</Wrapper>
			</Section>

			<Section component="div" mods={['bordertop', 'borderbottom']}>
				<Wrapper>
					<Typography>A default wrapper</Typography>
				</Wrapper>
			</Section>

			<Section component="div" mods={['dark']}>
				<Wrapper mods={['grid']}>
					<Box classes={['wrappers__onethird']} mods={['padding']}>
						<Typography>This box takes up 4/12 of this grid wrapper.</Typography>
					</Box>
					<Box classes={['wrappers__twothirds']} mods={['padding']}>
						<Typography>This box takes up 8/12 of this grid wrapper.</Typography>
					</Box>
				</Wrapper>
			</Section>

			<Section component="div">
				<Wrapper>
					<div className="wrappers__wrappers">
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
		</Section>
	);
};

export default Wrappers;
