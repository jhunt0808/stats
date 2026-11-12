import React from 'react';

const careerColumns = [
	{
		name: 'Player',
		sortable: true,
		id: 'First',
		selector: (row) => row.First,
		cell: (row) =>
			row.First === 'Totals' ? (
				<div>
					{row.First} {row.Last}
				</div>
			) : (
				<div>
					<a href={`/player/${row.id}/${row.First}-${row.Last}`}>
						{row.First} {row.Last}
					</a>
				</div>
			),
		width: '140px',
		grow: 1,
	},
	{
		name: 'AB',
		id: 'AB',
		selector: (row) => row.AB,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: 'H',
		id: 'Hits',
		selector: (row) => row.Hits,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: '1B',
		id: 'S',
		selector: (row) => row.S,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: '2B',
		id: 'D',
		selector: (row) => row.D,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: '3B',
		id: 'T',
		selector: (row) => row.T,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: 'HR',
		id: 'HR',
		selector: (row) => row.HR,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: 'R',
		id: 'R',
		selector: (row) => row.R,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: 'RBI',
		id: 'RBI',
		selector: (row) => row.RBI,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: 'BB',
		id: 'BB',
		selector: (row) => row.BB,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: 'SO',
		id: 'K',
		selector: (row) => row.K,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: 'SF',
		id: 'SF',
		selector: (row) => row.SF,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: 'FC',
		id: 'FC',
		selector: (row) => row.FC,
		sortable: true,
		center: true,
		width: '65px',
	},
	{
		name: 'AVG',
		id: 'AVG',
		selector: (row) => row.AVG,
		sortable: true,
		center: true,
		width: '70px',
		format: (row) => (Math.abs(row.AVG * 100) / 100).toFixed(3),
	},
	{
		name: 'OBP',
		id: 'OBP',
		selector: (row) => row.OBP,
		sortable: true,
		center: true,
		width: '70px',
		format: (row) => (Math.abs(row.OBP * 100) / 100).toFixed(3),
	},
	{
		name: 'SLG',
		id: 'SLG',
		selector: (row) => row.SLG,
		sortable: true,
		center: true,
		width: '70px',
		format: (row) => (Math.abs(row.SLG * 100) / 100).toFixed(3),
	},
	{
		name: 'OPS',
		id: 'OPS',
		selector: (row) => row.OPS,
		sortable: true,
		center: true,
		width: '70px',
		format: (row) => (Math.abs(row.OPS * 100) / 100).toFixed(3),
	},
];

export default careerColumns;
