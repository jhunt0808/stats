import React from 'react';
import styles from './home.module.scss';

const Home = () => {
	return (
		<div className={styles.homeWrapper}>
			<div className={styles.heading}>
				Select which team's stats you'd like to view.
			</div>
			<div className={styles.teamWrapper}>
				<div className={styles.team}>
					<a href='/teams/Scared Hitless'>Scared Hitless</a>
				</div>
				<div className={styles.team}>
					<a href='/teams/Journey 2'>Journey 2</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
