import React from 'react';
import DataTable from 'react-data-table-component';
import Totals from './Totals';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import stats from '../../Data/stats';
import teamStats from '../../Data/teamStats';
import TopPerformers from '../TopPerformers/TopPerformers';
import fields from '../../Data/performanceFields';
import styles from './team.module.scss';
import teamColumns from './TeamColumns';

const Team = (teamId) => {
	let filteredPlayers = [];
	let totalsData = [];
	let teamName = '';
	let teamStat = [];
	const filteredItemsFunc = () => {
		teamStat = teamStats.filter((team) => team.id === teamId.teamId);
		filteredPlayers = stats.filter(
			(player) => player.teamId === teamId.teamId
		);
		totalsData = [filteredPlayers];
		teamName =
			[filteredPlayers[0].Session] +
			' - ' +
			[filteredPlayers[0].Year] +
			' - ';
	};

	filteredItemsFunc();

	return (
		<>
			<div>
				<h2>{teamName} Team Page</h2>
			</div>
			<div className={styles.teamInfo}>
				<div className={styles.record}>
					<h3>Record</h3>
					<div>
						{teamStat[0].WINS} - {teamStat[0].LOSES}
					</div>
				</div>
				<div className={styles.teamLeaders}>
					<h3>Team Leaders</h3>
					<div className={styles.topPerformersWrapper}>
						<TopPerformers
							filteredPlayers={filteredPlayers}
							param={fields.AVG}
						/>

						<TopPerformers
							filteredPlayers={filteredPlayers}
							param={fields.HR}
						/>

						<TopPerformers
							filteredPlayers={filteredPlayers}
							param={fields.RBI}
						/>
						<TopPerformers
							filteredPlayers={filteredPlayers}
							param={fields.Hits}
						/>
					</div>
				</div>
			</div>
			<ScrollSync>
				<div>
					<ScrollSyncPane>
						<DataTable
							title={`${teamName} Stats`}
							columns={teamColumns}
							data={filteredPlayers}
							responsive
							dense={true}
							striped={true}
							highlightOnHover={true}
							defaultSortField='AB'
							defaultSortAsc={false}
						/>
					</ScrollSyncPane>
					<ScrollSyncPane>
						<Totals data={totalsData} />
					</ScrollSyncPane>
				</div>
			</ScrollSync>
		</>
	);
};

export default Team;
