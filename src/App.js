import React from 'react';
import DataTable from 'react-data-table-component';
import './App.css';
import statsData from './stats';

class App extends React.Component {

	state = {
		players: [],
		stats: [],
	};



	render() {
		let columns = [
			{
			  name: 'Year',
			  selector: 'Year',
			  sortable: true,
			},
			{
			  name: 'Session',
			  selector: 'Session',
			  sortable: true,
			},
			{
				name: 'Player',
				sortable: true,
				cell: row => <div>{row.First} {row.Last}</div>,
				grow: 8,
			 },
			 {
				name: 'AB',
				selector: 'AB',
				sortable: true,
			 },
			 {
				name: 'R',
				selector: 'R',
				sortable: true,
			 },
			 {
				name: 'H',
				selector: 'Hits',
				sortable: true,
			 },
			 {
				name: '1B',
				selector: 'S',
				sortable: true,
			 },
			 {
				name: '2B',
				selector: 'D',
				sortable: true,
			 },
			 {
				name: '3B',
				selector: 'T',
				sortable: true,
			 },
			 {
				name: 'HR',
				selector: 'HR',
				sortable: true,
			 },
			 {
				name: 'RBI',
				selector: 'RBI',
				sortable: true,
			 },
			 {
				name: 'BB',
				selector: 'BB',
				sortable: true,
			 },
			 {
				name: 'SO',
				selector: 'K',
				sortable: true,
			 },
			 {
				name: 'SF',
				selector: 'SF',
				sortable: true,
			 },
			 {
				name: 'FC',
				selector: 'FC',
				sortable: true,
			 },
			 
		 ];
		 
		return (
			
			<div className="App">

				<DataTable
					title="Softball Stats"
					columns={columns}
					data={statsData}
					responsive={false}
					fixedHeader
					fixedHeaderScrollHeight="600px"
					dense={true} 
				/>

				{/* <table>
					<thead>
						<th>Year</th>
						<th>Session</th>
						<th>Player</th>
						<th>PA</th>
						<th>AB</th>
						<th>H</th>
						<th>S</th>
						<th>D</th>
						<th>T</th>
						<th>HR</th>
						<th>BB</th>
						<th>K</th>
						<th>FC</th>
						<th>SF</th>
						<th>R</th>
						<th>RBI</th>
					</thead>
					{
						statsData.map((player, index) => {
							return (
								<tr key={index}>
									
									<td>{player.Year}</td>
									<td>{player.Session}</td>
									<td>{player.First} {player.Last}</td>
									<td>{player.PA}</td>
									<td>{player.AB}</td>
									<td>{player.Hits}</td>
									<td>{player.S}</td>
									<td>{player.D}</td>
									<td>{player.T}</td>
									<td>{player.HR}</td>
									<td>{player.BB}</td>
									<td>{player.K}</td>
									<td>{player.FC}</td>
									<td>{player.SF}</td>
									<td>{player.R}</td>
									<td>{player.RBI}</td>
								</tr>
							)
						})
					}
				</table> */}
			</div>
		);
	}
}

export default App;
