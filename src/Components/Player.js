import React from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../stats';
import columns from '../Columns';
import Totals from './Totals';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

const Player = (playerId) => {
    
    let filteredItems = [];
    let totalsData = [];
    let name = '';
    const filteredItemsFunc = () => {
        filteredItems = statsData.filter(player => player.PlayerId === playerId.playerId);
        totalsData = [filteredItems];
        name = [filteredItems[0].First] + ' ' + [filteredItems[0].Last];
    }
    
    filteredItemsFunc();

    return (
        <ScrollSync>
            <div>
                <ScrollSyncPane>
                    <DataTable
                        title={`Stats for ${name}`}
                        columns={columns}
                        data={filteredItems}
                        responsive
                        dense={true}
                        striped={true}
                        highlightOnHover={true}
                        defaultSortField="AB"
                        defaultSortAsc={false}
                    />
                </ScrollSyncPane>
                <ScrollSyncPane>
                    <Totals 
                        data={totalsData} 
                    />
                </ScrollSyncPane>
            </div>
        </ScrollSync>
    );
}

export default Player;
