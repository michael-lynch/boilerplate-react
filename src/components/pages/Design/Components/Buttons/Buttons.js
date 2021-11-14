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
import { ReactComponent as IconMailOutline } from 'icons/material/mail-outline.svg';

// docs
import dataProps from './Buttons.props.js';
import dataMods from './Buttons.mods.js';

// code
import code from './Buttons.code.txt';

// icons
import { ReactComponent as IconArrowCircleLeft } from 'icons/material/arrow-circle-left.svg';
import { ReactComponent as IconArrowCircleRight } from 'icons/material/arrow-circle-right.svg';

// styles
import './Buttons.css';

const Buttons = () => {
	const colors = [
		{
			name: 'Amber',
			slug: 'amber',
		},
		{
			name: 'Blue',
			slug: 'blue',
		},
		{
			name: 'Blue Grey',
			slug: 'blue-grey',
		},
		{
			name: 'Brown',
			slug: 'brown',
		},
		{
			name: 'Cyan',
			slug: 'cyan',
		},
		{
			name: 'Deep Orange',
			slug: 'deep-orange',
		},
		{
			name: 'Deep Purple',
			slug: 'deep-purple',
		},
		{
			name: 'Green',
			slug: 'green',
		},
		{
			name: 'Grey',
			slug: 'grey',
		},
		{
			name: 'Indigo',
			slug: 'indigo',
		},
		{
			name: 'Light Blue',
			slug: 'light-blue',
		},
		{
			name: 'Light Green',
			slug: 'light-green',
		},
		{
			name: 'Lime',
			slug: 'lime',
		},
		{
			name: 'Orange',
			slug: 'orange',
		},
		{
			name: 'Pink',
			slug: 'pink',
		},
		{
			name: 'Purple',
			slug: 'purple',
		},
		{
			name: 'Red',
			slug: 'red',
		},
		{
			name: 'Teal',
			slug: 'teal',
		},
		{
			name: 'Yellow',
			slug: 'yellow',
		},
	];

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
								<Button disabled={true} text="Disabled" />
							</li>
						</ul>
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Sizes
						</Typography>
						<ul className="btns__list">
							<li>
								<Button mods={['sm']} text="Small" />
							</li>
							<li>
								<Button mods={['md']} text="Medium" />
							</li>
							<li>
								<Button mods={['lg']} text="Large" />
							</li>
						</ul>
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Icons
						</Typography>
						<ul className="btns__list">
							<li>
								<Button iconStart={<IconCalendarToday />} text="Start Icon" />
							</li>
							<li>
								<Button iconEnd={<IconCalendarToday />} text="End Icon" />
							</li>
						</ul>
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Colors
						</Typography>
						<ul className="btns__list">
							{colors.map((color) => (
								<li>
									<Button mods={[`${color.slug}-700`]} text={color.name} />
								</li>
							))}
						</ul>
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Colors (Border)
						</Typography>
						<ul className="btns__list">
							{colors.map((color) => (
								<li>
									<Button mods={['border', `${color.slug}-700`]} text={color.name} />
								</li>
							))}
						</ul>
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Text
						</Typography>
						<ul className="btns__list">
							<li>
								<Button mods={['text']} text="Default" />
							</li>
							<li>
								<Button mods={['text', 'underline']} text="Underline" />
							</li>
							<li>
								<Button iconEnd={<IconArrowCircleRight />} mods={['text']} text="Start Icon" />
							</li>
							<li>
								<Button iconStart={<IconArrowCircleLeft />} mods={['text']} text="End Icon" />
							</li>
							<li>
								<Button disabled={true} mods={['text']} text="Disabled" />
							</li>
						</ul>
					</div>
					<div>
						<Typography classes={['h4']} component="h3">
							Text (Sizes)
						</Typography>
						<ul className="btns__list">
							<li>
								<Button mods={['text', 'sm']} text="Small" />
							</li>
							<li>
								<Button mods={['text', 'md']} text="Medium" />
							</li>
							<li>
								<Button mods={['text', 'lg']} text="Large" />
							</li>
						</ul>
					</div>

					<div>
						<Typography classes={['h4']} component="h3">
							Text (Colors)
						</Typography>
						<ul className="btns__list">
							{colors.map((color) => (
								<li>
									<Button
										iconEnd={<IconArrowCircleRight />}
										mods={['text', `${color.slug}-500`]}
										text={color.name}
									/>
								</li>
							))}
						</ul>
					</div>

					<div>
						<Typography classes={['h4']} component="h3">
							Icon
						</Typography>
						<ul className="btns__list">
							<li>
								<Button icon={<IconMailOutline />} mods={['icon']} text="Close" />
							</li>
							<li>
								<Button icon={<IconMailOutline />} mods={['icon', 'md']} text="Close" />
							</li>
							<li>
								<Button icon={<IconMailOutline />} mods={['icon', 'lg']} text="Close" />
							</li>
						</ul>
					</div>

					<div>
						<Typography classes={['h4']} component="h3">
							Icon (Colors)
						</Typography>
						<ul className="btns__list">
							{colors.map((color) => (
								<li>
									<Button
										icon={<IconClear />}
										mods={['icon', `${color.slug}-500`]}
										text={color.name}
									/>
								</li>
							))}
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
