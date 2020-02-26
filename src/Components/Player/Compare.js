import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../../Data/stats';
import CompareFilters from './CompareFilters';
import columns from '../../Columns';
import playersDropdown from '../../Data/players';
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

const playerDropdownValue = [];
playersDropdown.forEach((p) => playerDropdownValue.push(p.value));

const Compare = () => {
	const [players, setPlayers] = useState(playerDropdownValue);
	let filteredPlayers = [];
	let totalsData = [];

	const filteredPlayersFunc = () => {
		filteredPlayers = statsData.filter((player) =>
			players.includes(player.PlayerId)
		);

		totalsData = [filteredPlayers];
	};

	filteredPlayersFunc();

	const resetPlayersSelect = () => {
		setPlayers(playerDropdownValue);
	};

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleSelect = (inputValue) => {
			if (inputValue) {
				setPlayers([]);
				inputValue.forEach((p) => {
					setPlayers((oldArray) => [...oldArray, p.value]);
				});
			}
		};

		const removeValue = (inputValue) => {
			if (inputValue) {
				handleSelect(inputValue);
			} else {
				setPlayers([]);
				resetPlayersSelect();
			}
		};

		const clearSelection = () => {
			setPlayers([]);
			resetPlayersSelect();
		};

		return (
			<CompareFilters
				onSelectFn={handleSelect}
				clearSelection={clearSelection}
				removeValue={removeValue}
			/>
		);
	}, []);

	return (
		<div>
			<div>
				<h2>
					{/* {name} {props.teamId ? sessionYear : <></>} Team Page */}
				</h2>
			</div>
			<div className={styles.teamInfo}>
				<div className={styles.teamLeaders}>
					<h3>
						{/* {name} {props.teamId ? sessionYear : <></>} Leaders */}
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
	);
};

export default Compare;
