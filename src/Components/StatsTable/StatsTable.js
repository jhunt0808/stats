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
	let filteredItems = [];
	let totalsData = [];

	const filteredItemsFunc = () => {
		filteredItems = statsData
			.filter(
				(player) =>
					player.First.toLowerCase() &&
					player.First.toLowerCase().includes(
						filterText.toLowerCase()
					)
			)
			.filter((player) => sessions.includes(player.Session))
			.filter((player) => years.includes(player.Year));

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
			<ScrollSync>
				<div>
					<ScrollSyncPane>
						<DataTable
							title='Softball Stats'
							columns={columns}
							data={filteredItems}
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

export default StatsTable;
