import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../../Data/stats';
import teamStats from '../../Data/teamStats';
import styles from './team.module.scss';
import Filter from '../Filter/Filter';
import fields from '../../Data/performanceFields';
import TopPerformers from '../TopPerformers/TopPerformers';
import sessionOptions from '../../Data/SessionOptions';
import sessionsArray from '../../Data/Sessions';
import yearOptions from '../../Data/YearOptions';
import yearsArray from '../../Data/Years';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import columns from '../../Columns';
import Totals from '../Totals';

const customStyles = {
	headCells: {
		style: {
			'align-items': 'center',
			paddingLeft: '10px',
			paddingRight: '10px',
		},
	},
	cells: {
		style: {
			paddingLeft: '10px',
			paddingRight: '10px',
		},
	},
};

const Team = (props) => {
	const [sessions, setSessions] = useState(sessionsArray);
	const [years, setYears] = useState(yearsArray);
	let filteredPlayers = [];
	let totalsData = [];
	let isJourney = false;

	const filteredPlayersFunc = () => {
		if (props.teamName !== 'Scared Hitless') {
			isJourney = true;
		}
		filteredPlayers = statsData
			.filter((team) => team.Session.includes(props.teamName))
			.filter((team) => years.includes(team.Year))
			.filter((team) => sessions.includes(team.Session));

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

	const resetSessionSelect = () => {
		sessionOptions.forEach((so) => {
			setSessions((oldArray) => [...oldArray, so.value]);
		});
	};

	const resetYearsSelect = () => {
		yearOptions.forEach((yo) => {
			setYears((xx) => [...xx, yo.value]);
		});
	};

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleSelect = (inputValue, select) => {
			if (select === 'years') {
				if (inputValue) {
					setYears([]);
					inputValue.forEach((iv) => {
						setYears((xx) => [...xx, iv.value]);
					});
				}
			}

			if (select === 'sessions') {
				if (inputValue) {
					setSessions([]);
					inputValue.forEach((iv) => {
						setSessions((oldArray) => [...oldArray, iv.value]);
					});
				}
			}
		};

		const removeValue = (inputValue, select) => {
			if (select === 'sessions') {
				if (inputValue) {
					handleSelect(inputValue, 'sessions');
				} else {
					clearSelection('sessions');
				}
			}

			if (select === 'years') {
				if (inputValue) {
					handleSelect(inputValue, 'years');
				} else {
					clearSelection('years');
				}
			}
		};

		const clearSelection = (select) => {
			if (select === 'sessions') {
				setSessions([]);
				resetSessionSelect();
			} else if (select === 'years') {
				setYears([]);
				resetYearsSelect();
			}
		};

		return (
			isNaN(props.teamId) && (
				<Filter
					onFilter={() => {}}
					filters={'sessions'}
					onClear={''}
					filterText={''}
					onSelectFn={handleSelect}
					clearSelection={clearSelection}
					removeValue={removeValue}
					yearsFilter={true}
					sessionFilter={!isJourney}
					textFilter={false}
					teamsPage={!isJourney}
				/>
			)
		);
	}, [isJourney, props.teamId]);

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
							fixedHeader={true}
							dense={true}
							striped={true}
							subHeader
							subHeaderComponent={subHeaderComponentMemo}
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
