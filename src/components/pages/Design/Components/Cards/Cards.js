// pages
import Docs from 'components/pages/Design/Components/Docs/Docs';
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Card from 'components/ui/Card/Card';
import Code from 'components/ui/Code/Code';
import Typography from 'components/ui/Typography/Typography';

// docs
import dataProps from './Cards.props.js';

// code
import code from './Cards.code.txt';

// styles
import './Cards.css';

const Cards = () => {
	return (
		<Section classes={['cards']} id="card">
			<Wrapper>
				<Subtitle component="h1">Card</Subtitle>
				<Typography>
					Cards are used for displaying collections of data, generally in a grid.
				</Typography>

				<div className="cards__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>
						<ul className="cards__list">
							<li>
								<Card
									content="Tu quoque, Brute, fili mi, nihil timor populi, nihil! Fabio vel iudice vincam, sunt in culpa qui officia."
									title="Basic Card"
								/>
							</li>
							<li>
								<Card
									action={{
										text: 'Action',
									}}
									content="Tu quoque, Brute, fili mi, nihil timor populi, nihil! Fabio vel iudice vincam, sunt in culpa qui officia."
									title="CTA Card"
								/>
							</li>
							<li>
								<Card
									content="Tu quoque, Brute, fili mi, nihil timor populi, nihil! Fabio vel iudice vincam, sunt in culpa qui officia."
									img={{
										alt: 'alt text',
										src: 'http://placehold.it/300x300',
									}}
									title="Image Card"
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

export default Cards;
