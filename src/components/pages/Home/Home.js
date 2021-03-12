// layout
import Section from 'components/layout/Section/Section';
import Wrap from 'components/layout/Wrap/Wrap';

// ui
import Button from 'components/ui/Button/Button';
import Typography from 'components/ui/Typography/Typography';

// styles
import './Home.css';

function Home() {
	return (
		<Section classes={['home']} mods={['vh', 'vcenter']}>
			<Wrap>
				<div className="home__intro">
					<Typography component="h1">Hello World</Typography>
					<Typography classes={['home__copy']}>
						NAME is a boilerplate designed to be lean giving you the bare essential building blocks
						to get you started.
					</Typography>
					<Button>Button</Button>
				</div>
			</Wrap>
		</Section>
	);
}

export default Home;
