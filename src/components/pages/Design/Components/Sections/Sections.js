// pages
import Docs from 'components/pages/Design/Components/Docs/Docs';
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Code from 'components/ui/Code/Code';
import Typography from 'components/ui/Typography/Typography';

// docs
import dataMods from './Sections.mods.js';
import dataProps from './Sections.props.js';

// code
import code from './Sections.code.txt';

// styles
import './Sections.css';

const Sections = () => {
	return (
		<Section classes={['sections']} id="section">
			<Section component="div" mods={['paddingbottom']}>
				<Wrapper>
					<Subtitle component="h1">Section</Subtitle>
					<Typography>
						Sections are used to separate sections of content with vertical spacing.
					</Typography>

					<div className="sections__sections">
						<div>
							<Typography classes={['sections__examples', 'h4']} component="h3">
								Examples
							</Typography>
						</div>
					</div>
				</Wrapper>
			</Section>

			<Section component="div" mods={['grey']}>
				<Wrapper>
					<Typography>A grey section</Typography>
				</Wrapper>
			</Section>

			<Section component="div">
				<Wrapper>
					<Typography>A default section</Typography>
				</Wrapper>
			</Section>

			<Section component="div" mods={['dark']}>
				<Wrapper>
					<Typography>A dark section</Typography>
				</Wrapper>
			</Section>

			<Section component="div" mods={['white']}>
				<Wrapper>
					<Typography>A white section</Typography>
				</Wrapper>
			</Section>

			<Section component="div" mods={['borderbottom']}>
				<Wrapper>
					<Typography>A border section</Typography>
				</Wrapper>
			</Section>

			<Section component="div">
				<Wrapper>
					<div className="sections__sections">
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

export default Sections;
