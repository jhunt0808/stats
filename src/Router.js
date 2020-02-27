import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Compare from './Components/Player/Compare';
import Player from './Components/Player/Player';
import Teams from './Components/TeamsStats/TeamsStats';
import Team from './Components/Team/Team';
import Error from './Components/Error';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import styles from './app.module.scss';
import './scss/sliding-panel.scss';

const history = createBrowserHistory();

const trackingId = 'UA-92871100-2';
ReactGA.initialize(trackingId);

history.listen((location) => {
	ReactGA.set({ page: location.pathname }); // Update the user's current page
	ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const RouterComp = () => {
	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.pageContent}>
				<Router history={history}>
					<Switch>
						<Route
							exact
							path='/player/:pid/:playerName'
							render={(props) => (
								<Player
									playerId={Math.abs(props.match.params.pid)}
								/>
							)}
						/>
						<Route exact path='/teams' component={Teams} />
						<Route
							exact
							path='/teams/:teamName?/:teamId?'
							render={(props) => (
								<Team
									teamName={props.match.params.teamName}
									teamId={Math.abs(props.match.params.teamId)}
								/>
							)}
						/>

						<Route exact path='/compare' component={Compare} />

						<Route exact path='/all' component={App} />
						<Route exact path='/' component={Home} />
						<Route component={Error} />
					</Switch>
				</Router>
			</div>
			<Footer />
		</div>
	);
};

export default RouterComp;
