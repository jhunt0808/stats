import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Compare from './Components/Player/Compare';
import Player from './Components/Player/Player';
import Error from './Components/Error';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import styles from './app.module.scss';

const RouterComp = () => {
	return (
		<div className={styles.app}>
			<Header />
			<Router>
				<Switch>
					<Route exact path='/' component={App} />
					<Route exact path='/compare' component={Compare} />
					<Route
						exact
						path='/:pid/:playerName'
						render={(props) => (
							<Player
								playerId={Math.abs(props.match.params.pid)}
							/>
						)}
					/>
					<Route component={Error} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
};

export default RouterComp;
