// router
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// pages
import Design from 'components/pages/Design/Design';
import Login from 'components/pages/Login/Login';

// styles
import './App.css';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route path="/design/:page?">
						<Design />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Redirect to="/design/brand" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
