// pages
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';
import Swatch from 'components/pages/Design/Brand/Colors/Swatch/Swatch';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Typography from 'components/ui/Typography/Typography';

// swatches
import swatches from './Colors.swatches';

// styles
import './Colors.css';

const Colors = () => {
	const renderSwatches = (array) => {
		return array.map((swatch) => {
			return (
				<li key={`colors-swatch-${swatch.hex.replace('#', '')}`}>
					<Swatch hex={swatch.hex} name={swatch.name} />
				</li>
			);
		});
	};

	return (
		<Section classes={['colors']} id="colors">
			<Wrapper>
				<Subtitle>Colors</Subtitle>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Common
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.primary)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Amber
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.amber)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Blue
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.blue)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Blue Grey
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.blueGrey)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Brown
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.brown)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Cyan
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.cyan)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Deep Orange
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.deepOrange)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Deep Purple
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.deepPurple)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Green
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.green)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Grey
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.grey)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Indigo
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.indigo)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Light Blue
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.lightBlue)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Light Green
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.lightGreen)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Lime
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.lime)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Orange
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.orange)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Pink
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.pink)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Purple
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.purple)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Red
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.red)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Teal
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.teal)}</ul>
				</div>
				<div className="colors__section">
					<Typography classes={['h4']} component="h3">
						Yellow
					</Typography>
					<ul className="colors__list">{renderSwatches(swatches.yellow)}</ul>
				</div>
			</Wrapper>
		</Section>
	);
};

export default Colors;
