import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Compare from './Components/Player/Compare';
import Player from './Components/Player/Player';
import Teams from './Components/TeamsStats/TeamsStats';
import Team from './Components/Team/Team';
import TeamOld from './Components/TeamOld/Team';
import Error from './Components/Error';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import styles from './app.module.scss';
import './scss/sliding-panel.scss';

const RouterComp = () => {
	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.pageContent}>
				<Router>
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
						{/* <Route
							exact
							path='/teams/:teamName/:teamId?'
							render={(props) => (
								<Team
									teamName={props.match.params.teamName}
									teamId={Math.abs(props.match.params.teamId)}
								/>
							)}
						/> */}

						<Route
							exact
							path='/teams/:teamId'
							render={(props) => (
								<TeamOld
									teamId={Math.abs(props.match.params.teamId)}
								/>
							)}
						/>
						<Route exact path='/teams' component={Teams} />
						<Route exact path='/compare' component={Compare} />

						<Route exact path='/' component={App} />
						<Route component={Error} />
					</Switch>
				</Router>
			</div>
			<Footer />
		</div>
	);
};

export default RouterComp;
