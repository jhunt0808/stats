import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../stats';
import columns from '../Columns';
import Totals from './Totals';

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
        <div className="App">
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
            <Totals 
                data={totalsData} 
            />
        </div>
    );
}

export default Player;
