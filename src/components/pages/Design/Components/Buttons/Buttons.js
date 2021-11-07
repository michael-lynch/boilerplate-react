// pages
import Docs from 'components/pages/Design/Components/Docs/Docs';
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Button from 'components/ui/Button/Button';
import Code from 'components/ui/Code/Code';
import Typography from 'components/ui/Typography/Typography';

// icons
import { ReactComponent as IconCalendarToday } from 'icons/material/calendar-today.svg';
import { ReactComponent as IconClear } from 'icons/material/clear.svg';

// docs
import dataProps from './Buttons.props.js';
import dataMods from './Buttons.mods.js';

// code
import code from './Buttons.code.txt';

// styles
import './Buttons.css';

const Buttons = () => {
	return (
		<Section classes={['btns']} id="button">
			<Wrapper>
				<Subtitle component="h1">Button</Subtitle>
				<Typography>Buttons allow users to take actions and make choices.</Typography>

				<div className="btns__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Variants
						</Typography>
						<ul className="btns__list">
							<li>
								<Button text="Default" />
							</li>
							<li>
								<Button mods={['uppercase']} text="Uppercase" />
							</li>
							<li>
								<Button mods={['border']} text="Border" />
							</li>
							<li>
								<Button iconStart={<IconCalendarToday />} text="Start Icon" />
							</li>
							<li>
								<Button iconEnd={<IconCalendarToday />} text="End Icon" />
							</li>
							<li>
								<Button disabled={true} text="Disabled" />
							</li>
						</ul>
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Colors
						</Typography>
						<ul className="btns__list">
							<li>
								<Button mods={['amber-700']} text="Amber" />
							</li>
							<li>
								<Button mods={['blue-700']} text="Blue" />
							</li>
							<li>
								<Button mods={['blue-grey-700']} text="Blue Grey" />
							</li>
							<li>
								<Button mods={['brown-700']} text="Brown" />
							</li>
							<li>
								<Button mods={['cyan-700']} text="Cyan" />
							</li>
							<li>
								<Button mods={['deep-orange-700']} text="Deep Orange" />
							</li>
							<li>
								<Button mods={['deep-purple-700']} text="Deep Purple" />
							</li>
							<li>
								<Button mods={['green-700']} text="Green" />
							</li>
							<li>
								<Button mods={['grey-700']} text="Grey" />
							</li>
							<li>
								<Button mods={['indigo-700']} text="Indigo" />
							</li>
							<li>
								<Button mods={['light-blue-700']} text="Light Blue" />
							</li>
							<li>
								<Button mods={['light-green-700']} text="Light Green" />
							</li>
							<li>
								<Button mods={['lime-700']} text="Lime" />
							</li>
							<li>
								<Button mods={['orange-700']} text="Orange" />
							</li>
							<li>
								<Button mods={['pink-700']} text="Pink" />
							</li>
							<li>
								<Button mods={['purple-700']} text="Purple" />
							</li>
							<li>
								<Button mods={['red-700']} text="Red" />
							</li>
							<li>
								<Button mods={['teal-700']} text="Teal" />
							</li>
							<li>
								<Button mods={['yellow-700']} text="Yellow" />
							</li>
						</ul>
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Colors (Border)
						</Typography>
						<ul className="btns__list">
							<li>
								<Button mods={['border', 'amber-700']} text="Amber" />
							</li>
							<li>
								<Button mods={['border', 'blue-700']} text="Blue" />
							</li>
							<li>
								<Button mods={['border', 'blue-grey-700']} text="Blue Grey" />
							</li>
							<li>
								<Button mods={['border', 'brown-700']} text="Brown" />
							</li>
							<li>
								<Button mods={['border', 'cyan-700']} text="Cyan" />
							</li>
							<li>
								<Button mods={['border', 'deep-orange-700']} text="Deep Orange" />
							</li>
							<li>
								<Button mods={['border', 'deep-purple-700']} text="Deep Purple" />
							</li>
							<li>
								<Button mods={['border', 'green-700']} text="Green" />
							</li>
							<li>
								<Button mods={['border', 'grey-700']} text="Grey" />
							</li>
							<li>
								<Button mods={['border', 'indigo-700']} text="Indigo" />
							</li>
							<li>
								<Button mods={['border', 'light-blue-700']} text="Light Blue" />
							</li>
							<li>
								<Button mods={['border', 'light-green-700']} text="Light Green" />
							</li>
							<li>
								<Button mods={['border', 'lime-700']} text="Lime" />
							</li>
							<li>
								<Button mods={['border', 'orange-700']} text="Orange" />
							</li>
							<li>
								<Button mods={['border', 'pink-700']} text="Pink" />
							</li>
							<li>
								<Button mods={['border', 'purple-700']} text="Purple" />
							</li>
							<li>
								<Button mods={['border', 'red-700']} text="Red" />
							</li>
							<li>
								<Button mods={['border', 'teal-700']} text="Teal" />
							</li>
							<li>
								<Button mods={['border', 'yellow-700']} text="Yellow" />
							</li>
						</ul>
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Tertiary (Text)
						</Typography>
						<ul className="btns__list">
							<li>
								<Button mods={['text', 'forward']} text="Learn more" />
							</li>
							<li>
								<Button mods={['text', 'backward']} text="Back" />
							</li>

							<li>
								<Button disabled={true} mods={['text', 'forward']} text="Disabled" />
							</li>
						</ul>
					</div>

					<div>
						<Typography classes={['h4']} component="h3">
							Icon
						</Typography>
						<ul className="btns__list">
							<li>
								<Button icon={<IconClear />} mods={['icon']} text="Close" />
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

export default Buttons;
