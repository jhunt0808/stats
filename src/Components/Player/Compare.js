import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../../Data/stats';
import CompareFilters from './CompareFilters';
import columns from '../../Columns';
import playersDropdown from '../../Data/players';
import Totals from '../Totals';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

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
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	let filteredItems = [];
	let totalsData = [];

	const filteredItemsFunc = () => {
		filteredItems = statsData.filter((player) =>
			players.includes(player.PlayerId)
		);

		totalsData = [filteredItems];
	};

	filteredItemsFunc();

	const resetPlayersSelect = () => {
		players.forEach((so) => {
			setPlayers((oldArray) => [...oldArray, so.value]);
		});
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
	}, [resetPaginationToggle]);

	return (
		<>
			<ScrollSync>
				<div>
					<ScrollSyncPane>
						<DataTable
							title='Compare Players'
							columns={columns}
							data={filteredItems}
							responsive
							//pagination
							//paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
							subHeader
							subHeaderComponent={subHeaderComponentMemo}
							// fixedHeader
							// fixedHeaderScrollHeight="600px"
							dense={true}
							persistTableHead
							striped={true}
							highlightOnHover={true}
							customStyles={customStyles}
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

export default Compare;
