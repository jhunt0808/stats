import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../../Data/stats';
import Filter from '../Filter/Filter';
import columns from '../../Columns';
import sessionOptions from '../../Data/SessionOptions';
import sessionsArray from '../../Data/Sessions';
import yearOptions from '../../Data/YearOptions';
import yearsArray from '../../Data/Years';
import Totals from '../Totals';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import styles from '../Team/team.module.scss';
import fields from '../../Data/performanceFields';
import TopPerformers from '../TopPerformers/TopPerformers';

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

const StatsTable = () => {
	const [filterText, setFilterText] = useState('');
	const [sessions, setSessions] = useState(sessionsArray);
	const [years, setYears] = useState(yearsArray);
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	let filteredPlayers = [];
	let totalsData = [];

	const filteredPlayersFunc = () => {
		filteredPlayers = statsData
			.filter(
				(player) =>
					player.First.toLowerCase() &&
					player.First.toLowerCase().includes(
						filterText.toLowerCase()
					)
			)
			.filter((player) => sessions.includes(player.Session))
			.filter((player) => years.includes(player.Year));

		totalsData = [filteredPlayers];
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
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

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
				onFilter={(e) => setFilterText(e.target.value)}
				onClear={handleClear}
				filterText={filterText}
				onSelectFn={handleSelect}
				clearSelection={clearSelection}
				removeValue={removeValue}
				yearsFilter={true}
				sessionFilter={true}
				textFilter={true}
			/>
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<>
			<div>
				<div className={styles.teamInfo}>
					{/* <div className={styles.record}>
					<h3>Record</h3>
					<div>
						{teamStat[0].WINS} - {teamStat[0].LOSES}
					</div>
				</div> */}
					<div className={styles.teamLeaders}>
						<h3>Leaders</h3>
						<div className={styles.topPerformersWrapper}>
							<TopPerformers
								filteredPlayers={statsData}
								param={fields.AVG}
							/>

							<TopPerformers
								filteredPlayers={statsData}
								param={fields.HR}
							/>

							<TopPerformers
								filteredPlayers={statsData}
								param={fields.RBI}
							/>
							<TopPerformers
								filteredPlayers={statsData}
								param={fields.Hits}
							/>
						</div>
					</div>
				</div>
				<ScrollSync>
					<div>
						<ScrollSyncPane>
							<DataTable
								columns={columns}
								data={filteredPlayers}
								fixedHeader={true}
								responsive
								subHeader
								subHeaderComponent={subHeaderComponentMemo}
								dense={true}
								persistTableHead
								striped={true}
								highlightOnHover={true}
								customStyles={customStyles}
								defaultSortField='AB'
								defaultSortAsc={false}
								noHeader={true}
							/>
						</ScrollSyncPane>
						<ScrollSyncPane>
							<Totals data={totalsData} />
						</ScrollSyncPane>
					</div>
				</ScrollSync>
			</div>
		</>
	);
};

export default StatsTable;
