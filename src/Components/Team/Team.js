import React from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../../Data/stats';
import teamStats from '../../Data/teamStats';
import styles from './team.module.scss';
import fields from '../../Data/performanceFields';
import TopPerformers from '../TopPerformers/TopPerformers';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import columns from '../../Columns';
import Totals from '../Totals';

const customStyles = {
	headCells: {
		style: {
			'align-items': 'center',
			paddingLeft: '10px',
			paddingRight: '10px'
		}
	},
	cells: {
		style: {
			paddingLeft: '10px',
			paddingRight: '10px'
		}
	}
};

const Team = (props) => {
	let filteredPlayers = [];
	let totalsData = [];

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

		totalsData = [filteredPlayers];
	};

	filteredPlayersFunc();

	let filteredTeams = [];
	if (!isNaN(props.teamId)) {
		filteredTeams = teamStats.filter((team) => team.id === props.teamId);
	}

	let sessionYear = ' - ' + filteredPlayers[0].Year + ' - ';
	let name = props.teamName;

	return (
		<div>
			<div>
				<h2>
					{name} {props.teamId ? sessionYear : <></>} Team Page
				</h2>
			</div>
			<div className={styles.teamInfo}>
				{!isNaN(props.teamId) ? (
					<div className={styles.record}>
						<h3>Record</h3>
						<div>
							{filteredTeams[0].WINS} - {filteredTeams[0].LOSES}
						</div>
					</div>
				) : (
					<></>
				)}
				<div className={styles.teamLeaders}>
					<h3>
						{name} {props.teamId ? sessionYear : <></>} Leaders
					</h3>
					<div className={styles.topPerformersWrapper}>
						<TopPerformers
							filteredPlayers={filteredPlayers}
							param={fields.AVG}
							teamPage={false}
						/>

						<TopPerformers
							filteredPlayers={filteredPlayers}
							param={fields.HR}
							teamPage={false}
						/>

						<TopPerformers
							filteredPlayers={filteredPlayers}
							param={fields.RBI}
							teamPage={false}
						/>
						<TopPerformers
							filteredPlayers={filteredPlayers}
							param={fields.Hits}
							teamPage={false}
						/>
					</div>
				</div>
			</div>
			<ScrollSync>
				<div>
					<ScrollSyncPane>
						<DataTable
							noHeader={true}
							columns={columns}
							data={filteredPlayers}
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
			</ScrollSync>
		</div>
	);
};

export default Team;
