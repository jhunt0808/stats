import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../stats';
import columns from '../Columns';
import Totals from './Totals';

const Player = (playerId) => {
    
    let filteredItems = [];
    let totalsData = [];
    const filteredItemsFunc = () => {
        filteredItems = statsData.filter(player => player.PlayerId === playerId.playerId);
        totalsData = [filteredItems];
    }
    
    filteredItemsFunc();

    return (
        <div className="App">
            <h1>Player Page</h1>
            <DataTable
                title="Softball Stats"
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
