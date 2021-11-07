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
import dataMods from './Typographys.mods.js';
import dataProps from './Typographys.props.js';

// code
import code from './Typographys.code.txt';

// styles
import './Typographys.css';

const Typographys = () => {
	return (
		<Section classes={['typographys']} id="typography">
			<Wrapper>
				<Subtitle component="h1">Typography</Subtitle>
				<Typography>Typography is used to set text on the page.</Typography>

				<div className="typographys__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>
						<ul className="typographys__list">
							<li>
								<Typography classes={['typographys__text']} component="h1">
									H1 Header
								</Typography>
							</li>
							<li>
								<Typography classes={['typographys__text']} component="h2">
									H2 Header
								</Typography>
							</li>
							<li>
								<Typography classes={['typographys__text']} component="h3">
									H3 Header
								</Typography>
							</li>
							<li>
								<Typography classes={['typographys__text']} component="h4">
									H4 Header
								</Typography>
							</li>
							<li>
								<Typography classes={['typographys__text']} component="h5">
									H5 Header
								</Typography>
							</li>
							<li>
								<Typography classes={['typographys__text']} component="h6">
									H6 Header
								</Typography>
							</li>
							<li>
								<Typography mods={['caption']}>Caption</Typography>
							</li>
							<li>
								<Typography mods={['instruction']}>Instruction</Typography>
							</li>
							<li>
								<Typography mods={['overline']}>Overline</Typography>
							</li>
							<li>
								<Typography>
									Fabio vel iudice vincam, sunt in culpa qui officia. Magna pars studiorum, prodita
									quaerimus. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem
									tractata ab fiducia dicuntur. Plura mihi bona sunt, inclinet, amari petere
									vellent. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
									tempor incidunt ut labore et dolore magna aliqua.
								</Typography>
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

export default Typographys;
