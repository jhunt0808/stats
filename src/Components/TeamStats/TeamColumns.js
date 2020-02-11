import React from 'react';

const teamColumns = [
	{
		name: 'Team',
		sortable: true,
		selector: 'Session',
		cell: (row) =>
			row.First === 'Totals' ? (
				<div>
					{row.First} {row.Last}
				</div>
			) : (
				<div>{row.Session}</div>
			),
		width: '70px',
		grow: 1
	},
	{
		name: 'Year',
		selector: 'Year',
		sortable: true,
		width: '70px'
	},
	{
		name: 'Wins',
		selector: 'WINS',
		sortable: true,
		width: '70px'
	},
	{
		name: 'Loses',
		selector: 'LOSES',
		sortable: true,
		width: '70px'
	},
	{
		name: 'AB',
		selector: 'AB',
		sortable: true,
		center: true,
		cell: (row) =>
			row.First === 'Totals' ? (
				<div>
					{row.First} {row.Last}
				</div>
			) : (
				<div>{row.AB}</div>
			),
		width: '65px'
	},
	{
		name: 'H',
		selector: 'Hits',
		sortable: true,
		center: true,
		width: '65px'
	},
	{
		name: '1B',
		selector: 'S',
		sortable: true,
		center: true,
		width: '65px'
	},
	{
		name: '2B',
		selector: 'D',
		sortable: true,
		center: true,
		width: '65px'
	},
	{
		name: '3B',
		selector: 'T',
		sortable: true,
		center: true,
		width: '65px'
	},
	{
		name: 'HR',
		selector: 'HR',
		sortable: true,
		center: true,
		width: '65px'
	},
	{
		name: 'R',
		selector: 'R',
		sortable: true,
		center: true,
		width: '65px'
	},
	{
		name: 'RBI',
		selector: 'RBI',
		sortable: true,
		center: true,
		width: '65px'
	},
	{
		name: 'BB',
		selector: 'BB',
		sortable: true,
		center: true,
		width: '65px'
	},
	{
		name: 'SO',
		selector: 'K',
		sortable: true,
		center: true,
		width: '65px'
	},
	{
		name: 'SF',
		selector: 'SF',
		sortable: true,
		center: true,
		width: '65px'
	},
	{
		name: 'FC',
		selector: 'FC',
		sortable: true,
		center: true,
		width: '65px'
	},
	{
		name: 'AVG',
		selector: 'AVG',
		sortable: true,
		center: true,
		width: '70px',
		format: (row) => (Math.abs(row.AVG * 100) / 100).toFixed(3)
	},
	{
		name: 'OBP',
		selector: 'OBP',
		sortable: true,
		center: true,
		width: '70px',
		format: (row) => (Math.abs(row.OBP * 100) / 100).toFixed(3)
	},
	{
		name: 'SLG',
		selector: 'SLG',
		sortable: true,
		center: true,
		width: '70px',
		format: (row) => (Math.abs(row.SLG * 100) / 100).toFixed(3)
	},
	{
		name: 'OPS',
		selector: 'OPS',
		sortable: true,
		center: true,
		width: '70px',
		format: (row) => (Math.abs(row.OPS * 100) / 100).toFixed(3)
	}
];

export default teamColumns;
