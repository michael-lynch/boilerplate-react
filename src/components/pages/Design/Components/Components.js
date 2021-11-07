// router
import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import Alerts from 'components/pages/Design/Components/Alerts/Alerts';
import Boxes from 'components/pages/Design/Components/Boxes/Boxes';
import Buttons from 'components/pages/Design/Components/Buttons/Buttons';
import Cards from 'components/pages/Design/Components/Cards/Cards';
import Checkboxes from 'components/pages/Design/Components/Checkboxes/Checkboxes';
import Chips from 'components/pages/Design/Components/Chips/Chips';
import Dialogs from 'components/pages/Design/Components/Dialogs/Dialogs';
import Inputs from 'components/pages/Design/Components/Inputs/Inputs';
import Labels from 'components/pages/Design/Components/Labels/Labels';
import Radios from 'components/pages/Design/Components/Radios/Radios';
import Sections from 'components/pages/Design/Components/Sections/Sections';
import Selects from 'components/pages/Design/Components/Selects/Selects';
import Tables from 'components/pages/Design/Components/Tables/Tables';
import Tabz from 'components/pages/Design/Components/Tabz/Tabz';
import Toasts from 'components/pages/Design/Components/Toasts/Toasts';
import Typographys from 'components/pages/Design/Components/Typographys/Typographys';
import Wrappers from 'components/pages/Design/Components/Wrappers/Wrappers';

const Components = () => {
	return (
		<div className="components">
			<Switch>
				<Route path="/design/components/alert">
					<Alerts />
				</Route>
				<Route path="/design/components/box">
					<Boxes />
				</Route>
				<Route path="/design/components/button">
					<Buttons />
				</Route>
				<Route path="/design/components/card">
					<Cards />
				</Route>
				<Route path="/design/components/checkbox">
					<Checkboxes />
				</Route>
				<Route path="/design/components/chip">
					<Chips />
				</Route>
				<Route path="/design/components/dialog">
					<Dialogs />
				</Route>
				<Route path="/design/components/input">
					<Inputs />
				</Route>
				<Route path="/design/components/label">
					<Labels />
				</Route>
				<Route path="/design/components/radio">
					<Radios />
				</Route>
				<Route path="/design/components/section">
					<Sections />
				</Route>
				<Route path="/design/components/select">
					<Selects />
				</Route>
				<Route path="/design/components/table">
					<Tables />
				</Route>
				<Route path="/design/components/tabs">
					<Tabz />
				</Route>
				<Route path="/design/components/toast">
					<Toasts />
				</Route>
				<Route path="/design/components/typography">
					<Typographys />
				</Route>
				<Route path="/design/components/wrapper">
					<Wrappers />
				</Route>

				<Redirect to="/design/components/alert" />
			</Switch>
		</div>
	);
};

export default Components;
