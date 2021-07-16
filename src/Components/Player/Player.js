import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../../Data/stats';
import playersData from '../../Data/players';
import sessionOptions from '../../Data/SessionOptions';
import sessionsArray from '../../Data/Sessions';
import yearOptions from '../../Data/YearOptions';
import yearsArray from '../../Data/Years';
import columns from './Columns';
import Totals from './Totals';
import Filter from '../Filter/Filter';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import styles from './player.module.scss';

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

const Player = (playerId) => {
	const [sessions, setSessions] = useState(sessionsArray);
	const [years, setYears] = useState(yearsArray);
	let filteredPlayers = [];
	let totalsData = [];
	let name = '';
	let player = [];
	const filteredPlayersFunc = () => {
		filteredPlayers = statsData
			.filter((player) => player.PlayerId === playerId.playerId)
			.filter((team) => years.includes(team.Year))
			.filter((team) => sessions.includes(team.Session));
		totalsData = [filteredPlayers];
		player = playersData.filter(
			(player) => player.value === playerId.playerId
		);
		name = [player[0].label];
	};

	filteredPlayersFunc();

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
			<Filter
				onFilter={() => {}}
				filters={'sessions'}
				onClear={''}
				filterText={''}
				onSelectFn={handleSelect}
				clearSelection={clearSelection}
				removeValue={removeValue}
				yearsFilter={true}
				sessionFilter={true}
				textFilter={false}
			/>
		);
	}, []);

	return (
		<div className={styles.playerWrapper}>
			<ScrollSync>
				<div>
					<ScrollSyncPane>
						<DataTable
							title={`Career Stats for ${name}`}
							columns={columns}
							data={filteredPlayers}
							fixedHeader={true}
							responsive
							subHeader
							subHeaderComponent={subHeaderComponentMemo}
							dense={true}
							striped={true}
							highlightOnHover={true}
							defaultSortField='AB'
							defaultSortAsc={false}
							customStyles={customStyles}
						/>
					</ScrollSyncPane>
					<ScrollSyncPane>
						<Totals data={totalsData} columns={columns} />
					</ScrollSyncPane>
				</div>
			</ScrollSync>
		</div>
	);
};

export default Player;
