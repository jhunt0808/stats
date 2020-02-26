import React from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../../Data/stats';
import columns from './Columns';
import Totals from './Totals';
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

const Player = (playerId) => {
	let filteredItems = [];
	let totalsData = [];
	let name = '';
	const filteredItemsFunc = () => {
		filteredItems = statsData.filter(
			(player) => player.PlayerId === playerId.playerId
		);
		totalsData = [filteredItems];
		name = [filteredItems[0].First] + ' ' + [filteredItems[0].Last];
	};

	filteredItemsFunc();

	return (
		<ScrollSync>
			<div>
				<ScrollSyncPane>
					<DataTable
						title={`Career Stats for ${name}`}
						columns={columns}
						data={filteredItems}
						fixedHeader={true}
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
	);
};

export default Player;
