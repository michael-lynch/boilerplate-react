// pages
import Docs from 'components/pages/Design/Components/Docs/Docs';
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Box from 'components/ui/Box/Box';
import Code from 'components/ui/Code/Code';
import Tabs from 'components/ui/Tabs/Tabs';
import TabPanel from 'components/ui/TabPanel/TabPanel';
import Typography from 'components/ui/Typography/Typography';

// icons
import { ReactComponent as IconCalendarToday } from 'icons/material/calendar-today.svg';
import { ReactComponent as IconFingerprint } from 'icons/material/fingerprint.svg';
import { ReactComponent as IconInfo } from 'icons/material/info.svg';
import { ReactComponent as IconMailOutline } from 'icons/material/mail-outline.svg';
import { ReactComponent as IconPerson } from 'icons/material/person.svg';
import { ReactComponent as IconWeb } from 'icons/material/web.svg';

// docs
import dataMods from './Tabz.mods.js';
import dataProps from './Tabz.props.js';

// code
import code from './Tabz.code.txt';

// styles
import './Tabz.css';

const Tabz = () => {
	// vars
	const tabs = [
		{
			icon: <IconPerson />,
			text: 'Users',
			value: 'users',
		},
		{
			icon: <IconCalendarToday />,
			text: 'Calendar',
			value: 'calendar',
		},
	];

	const tabsB = [
		{
			icon: <IconMailOutline />,
			text: 'Notifications',
			value: 'notifications',
		},
		{
			icon: <IconInfo />,
			text: 'Info',
			value: 'info',
		},
	];

	const tabsC = [
		{
			icon: <IconFingerprint />,
			text: 'Brand',
			value: 'brand',
		},
		{
			icon: <IconWeb />,
			text: 'Components',
			value: 'components',
		},
	];

	return (
		<Section classes={['tabz']} id="tabs">
			<Wrapper>
				<Subtitle component="h1">Tabs</Subtitle>
				<Typography>
					Tabs and TabPanels are used in conjunction to create tabbed content.
				</Typography>

				<div className="tabz__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>
						<Tabs tabs={tabs} />
						<div className="tabz__panels">
							<TabPanel value="users">
								<Typography>
									Donec sed odio operae, eu vulputate felis rhoncus. Nihil hic munitissimus habendi
									senatus locus, nihil horum? Integer legentibus erat a ante historiarum dapibus.
								</Typography>
							</TabPanel>
							<TabPanel value="calendar">
								<Typography>
									Quisque ut dolor gravida, placerat libero vel, euismod. Hi omnes lingua,
									institutis, legibus inter se differunt. Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus.
								</Typography>
							</TabPanel>
						</div>
					</div>

					<div>
						<Box mods={['border']}>
							<Tabs mods={['full']} tabs={tabsB} />
						</Box>
						<div className="tabz__panels">
							<TabPanel value="notifications">
								<Typography>
									Donec sed odio operae, eu vulputate felis rhoncus. Nihil hic munitissimus habendi
									senatus locus, nihil horum? Integer legentibus erat a ante historiarum dapibus.
								</Typography>
							</TabPanel>
							<TabPanel value="info">
								<Typography>
									Quisque ut dolor gravida, placerat libero vel, euismod. Hi omnes lingua,
									institutis, legibus inter se differunt. Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus.
								</Typography>
							</TabPanel>
						</div>
					</div>

					<div>
						<Box classes={['tabz__white']} mods={['border']}>
							<Tabs tabs={tabsC} />
						</Box>
						<Box classes={['tabz__panels']} mods={['border', 'padding']}>
							<TabPanel value="brand">
								<Typography>
									Donec sed odio operae, eu vulputate felis rhoncus. Nihil hic munitissimus habendi
									senatus locus, nihil horum? Integer legentibus erat a ante historiarum dapibus.
								</Typography>
							</TabPanel>
							<TabPanel value="components">
								<Typography>
									Quisque ut dolor gravida, placerat libero vel, euismod. Hi omnes lingua,
									institutis, legibus inter se differunt. Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus.
								</Typography>
							</TabPanel>
						</Box>
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

export default Tabz;
