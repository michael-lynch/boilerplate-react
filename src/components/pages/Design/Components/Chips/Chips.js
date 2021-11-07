// pages
import Docs from 'components/pages/Design/Components/Docs/Docs';
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Chip from 'components/ui/Chip/Chip';
import Code from 'components/ui/Code/Code';
import Typography from 'components/ui/Typography/Typography';

// docs
import dataProps from './Chips.props.js';
import dataMods from './Chips.mods.js';

// code
import code from './Chips.code.txt';

// styles
import './Chips.css';

const Chips = () => {
	return (
		<Section classes={['chips']} id="chip">
			<Wrapper>
				<Subtitle component="h1">Chip</Subtitle>
				<Typography>
					Chips are generally used to display a status of something but they can also be used to
					display a collection of items like active filters or serch queries.
				</Typography>

				<div className="chips__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>

						<ul className="chips__list">
							<li>
								<Chip label="Default" />
							</li>
							<li>
								<Chip label="Info" type="info" />
							</li>
							<li>
								<Chip label="Success" type="success" />
							</li>
							<li>
								<Chip label="Error" type="error" />
							</li>
							<li>
								<Chip label="Warning" type="warning" />
							</li>
						</ul>
					</div>

					<div className="chips__sections">
						<div>
							<Typography classes={['h4']} component="h3">
								Filled
							</Typography>

							<ul className="chips__list">
								<li>
									<Chip label="Default" mods={['filled']} />
								</li>
								<li>
									<Chip label="Info" mods={['filled']} type="info" />
								</li>
								<li>
									<Chip label="Success" mods={['filled']} type="success" />
								</li>
								<li>
									<Chip label="Error" mods={['filled']} type="error" />
								</li>
								<li>
									<Chip label="Warning" mods={['filled']} type="warning" />
								</li>
							</ul>
						</div>
					</div>

					<div className="chips__sections">
						<div>
							<Typography classes={['h4']} component="h3">
								Interactive
							</Typography>

							<ul className="chips__list">
								<li>
									<Chip label="Toronto" onDelete={(e) => console.log('deleted')} />
								</li>
								<li>
									<Chip label="Vancouver" onDelete={(e) => console.log('deleted')} />
								</li>
								<li>
									<Chip label="Montreal" onDelete={(e) => console.log('deleted')} />
								</li>
								<li>
									<Chip label="Calgary" onDelete={(e) => console.log('deleted')} />
								</li>
							</ul>
						</div>
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

export default Chips;
