import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Filter from '../Filter/Filter';
import teamColumns from './TeamColumns';
import sessionOptions from '../../Data/SessionOptions';
import sessionsArray from '../../Data/Sessions';
import yearOptions from '../../Data/YearOptions';
import yearsArray from '../../Data/Years';
import Totals from './Totals';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import teamStats from '../../Data/teamStats';

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

const TeamsStats = () => {
	const [sessions, setSessions] = useState(sessionsArray);
	const [years, setYears] = useState(yearsArray);
	let filteredItems = [];
	let totalsData = [];

	const filteredItemsFunc = () => {
		filteredItems = teamStats
			.filter((team) => years.includes(team.Year))
			.filter((team) => sessions.includes(team.Session));

		totalsData = [filteredItems];
	};

	filteredItemsFunc();

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
		<>
			<ScrollSync>
				<div>
					<ScrollSyncPane>
						<DataTable
							title='Team Stats'
							columns={teamColumns}
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

export default TeamsStats;
