import React from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../../Data/stats';
import styles from './team.module.scss';
import fields from '../../Data/performanceFields';
import TopPerformers from '../TopPerformers/TopPerformers';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

const Team = (props) => {
	let filteredPlayers = [];
	let totalsData = [];
	let name = props.teamName;

	const filteredPlayersFunc = () => {
		if (props.teamName === 'Journey 2') {
			filteredPlayers = statsData.filter(
				(team) => team.Session === props.teamName
			);
		} else {
			filteredPlayers = statsData.filter(
				(team) => team.Session !== 'Journey 2'
			);
		}

		if (props.teamId) {
			filteredPlayers = statsData.filter(
				(team) => team.teamId === props.teamId
			);
		}
		console.log(filteredPlayers);
		totalsData = [filteredPlayers];
	};

	filteredPlayersFunc();

	return (
		<div>
			{name} = {props.teamId}
			<div>
				<h2>{name} Team Page</h2>
			</div>
			<div className={styles.teamInfo}>
				{/* <div className={styles.record}>
					<h3>Record</h3>
					<div>
						{teamStat[0].WINS} - {teamStat[0].LOSES}
					</div>
				</div> */}
				<div className={styles.teamLeaders}>
					<h3>{name} Leaders</h3>
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
			{/* <ScrollSync>
				<div>
					<ScrollSyncPane>
						<DataTable
							title={`Career Stats for ${name}`}
							columns={columns}
							data={filteredItems}
							responsive
							dense={true}
							striped={true}
							highlightOnHover={true}
							defaultSortField='AB'
							defaultSortAsc={false}
							customStyles={customStyles}
						/>
					</ScrollSyncPane>
					<ScrollSyncPane>
						<Totals data={totalsData} />
					</ScrollSyncPane>
				</div>
			</ScrollSync> */}
		</div>
	);
};

export default Team;
