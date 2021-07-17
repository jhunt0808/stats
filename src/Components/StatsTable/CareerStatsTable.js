import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../../Data/stats';
import Filter from '../Filter/Filter';
import careerColumns from '../../CareerColumns';
import yearOptions from '../../Data/YearOptions';
import yearsArray from '../../Data/Years';
import { leagueArray, leagueOptions } from '../../Data/league';
import Totals from '../Totals';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import styles from '../Team/team.module.scss';
import fields from '../../Data/performanceFields';
import TopPerformers from '../TopPerformers/TopPerformers';
import players from '../../Data/players';
import calcTotals from '../../utils/totals';

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

const CareerStatsTable = () => {
	const [filterText, setFilterText] = useState('');
	const [years, setYears] = useState(yearsArray);
	const [league, setLeague] = useState(leagueArray);
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	let totalsData = [];

	let careerStats = [];
	const careerStatsFunc = () => {
		let x = [];
		players.forEach((player) => {
			let playerCareer = [];
			statsData
				.filter((stat) => years.includes(stat.Year))
				.filter((stat) => league.some((v) => stat.Session.includes(v)))
				.forEach((stat) => {
					if (stat.PlayerId === player.value) {
						playerCareer.push(stat);
					}
				});

			if (playerCareer.length) {
				x.push(calcTotals(playerCareer));
			}
		});

		// TODO: create filter for min AB
		//careerStats = x.filter((player) => player.AB > 41);
		careerStats = x;
		totalsData = careerStats;
	};

	careerStatsFunc();

	const resetYearsSelect = () => {
		yearOptions.forEach((yo) => {
			setYears((xx) => [...xx, yo.value]);
		});
	};

	const resetLeagueSelect = () => {
		leagueOptions.forEach((lo) => {
			setLeague((zz) => [...zz, lo.value]);
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

			if (select === 'league') {
				if (inputValue) {
					setLeague([]);
					inputValue.forEach((iv) => {
						setLeague((zz) => [...zz, iv.value]);
					});
				}
			}
		};

		const removeValue = (inputValue, select) => {
			if (select === 'years') {
				if (inputValue) {
					handleSelect(inputValue, 'years');
				} else {
					clearSelection('years');
				}
			}

			if (select === 'league') {
				if (inputValue) {
					handleSelect(inputValue, 'league');
				} else {
					clearSelection('league');
				}
			}
		};

		const clearSelection = (select) => {
			if (select === 'years') {
				setYears([]);
				resetYearsSelect();
			} else if (select === 'league') {
				setLeague([]);
				resetLeagueSelect();
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
				sessionFilter={false}
				textFilter={false}
				leagueFilter={true}
			/>
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<>
			<div>
				<div className={styles.teamInfo}>
					<div className={styles.teamLeaders}>
						<h3>Leaders</h3>
						<div className={styles.topPerformersWrapper}>
							<TopPerformers
								filteredPlayers={careerStats}
								param={fields.AVG}
							/>

							<TopPerformers
								filteredPlayers={careerStats}
								param={fields.HR}
							/>

							<TopPerformers
								filteredPlayers={careerStats}
								param={fields.RBI}
							/>
							<TopPerformers
								filteredPlayers={careerStats}
								param={fields.Hits}
							/>
						</div>
					</div>
				</div>
				<ScrollSync>
					<div>
						<ScrollSyncPane>
							<DataTable
								columns={careerColumns}
								data={careerStats}
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
							<Totals data={totalsData} career={true} />
						</ScrollSyncPane>
					</div>
				</ScrollSync>
			</div>
		</>
	);
};

export default CareerStatsTable;
