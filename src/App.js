import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
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
import Career from './Components/Career/Career';

const PlayerRoute = () => {
	const { pid } = useParams();
	return <Player playerId={Math.abs(pid)} />;
};

const TeamRoute = () => {
	const { teamName, teamId } = useParams();
	return <Team teamName={teamName} teamId={Math.abs(teamId)} />;
};

const App = () => {
	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.pageContent}>
				<Routes>
					<Route path='/player/:pid/:playerName' element={<PlayerRoute />} />
					<Route path='/teams' element={<Teams />} />
					<Route path='/teams/:teamName' element={<TeamRoute />} />
					<Route path='/teams/:teamName/:teamId' element={<TeamRoute />} />
					<Route path='/career' element={<Career />} />
					<Route path='/compare' element={<Compare />} />
					<Route path='/all' element={<All />} />
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
