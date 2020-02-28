import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import * as createHistory from 'history';
import styles from './app.module.scss';
import All from './Components/All/All';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Compare from './Components/Player/Compare';
import Player from './Components/Player/Player';
import Team from './Components/Team/Team';
import Teams from './Components/TeamsStats/TeamsStats';
import './scss/sliding-panel.scss';

const history = createHistory.createBrowserHistory();

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
