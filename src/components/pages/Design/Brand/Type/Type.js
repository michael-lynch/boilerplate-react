// pages
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Typography from 'components/ui/Typography/Typography';

// styles
import './Type.css';

const Type = () => {
	return (
		<Section classes={['type']} id="typography">
			<Wrapper>
				<Subtitle component="h1">Typography</Subtitle>

				<ul className="type__list">
					<li>
						<Typography classes={['type__el']} component="h1">
							H1 Header
						</Typography>
					</li>
					<li>
						<Typography classes={['type__el']} component="h2">
							H2 Header
						</Typography>
					</li>
					<li>
						<Typography classes={['type__el']} component="h3">
							H3 Header
						</Typography>
					</li>
					<li>
						<Typography classes={['type__el']} component="h4">
							H4 Header
						</Typography>
					</li>
					<li>
						<Typography classes={['type__el']} component="h5">
							H5 Header
						</Typography>
					</li>
					<li>
						<Typography classes={['type__el']} component="h6">
							H6 Header
						</Typography>
					</li>
					<li>
						<Typography component="span" mods={['caption']}>
							Caption
						</Typography>
					</li>
					<li>
						<Typography component="span" mods={['instruction']}>
							Instruction
						</Typography>
					</li>
					<li>
						<Typography>
							Fabio vel iudice vincam, sunt in culpa qui officia. Magna pars studiorum, prodita
							quaerimus. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem
							tractata ab fiducia dicuntur. Plura mihi bona sunt, inclinet, amari petere vellent.
							Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut
							labore et dolore magna aliqua.
						</Typography>
					</li>
				</ul>
			</Wrapper>
		</Section>
	);
};

export default Type;
