import React from 'react';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import All from './Components/All/All';
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

const history = createHistory();
ReactGA.initialize('UA-92871100-2');
history.listen((location, action) => {
	ReactGA.pageview(location.pathname + location.search);
	console.log(location.pathname);
});

const App = () => {
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

						<Route exact path='/all' component={All} />
						<Route exact path='/' component={Home} />
						<Route component={Error} />
					</Switch>
				</Router>
			</div>
			<Footer />
		</div>
	);
};

export default App;
