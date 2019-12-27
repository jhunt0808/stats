import React from 'react';
import logo from './logo.svg';
import './App.css';
//import data from './playersData.json';
import data from './players';
import statsData from './stats';

class App extends React.Component {

	state = {
		players: [],
		stats: [],
	};

	render() {

		
		 
		return (
			
			<div className="App">
				{/* <header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
				<button onClick={this.test}>Click here</button> */}


				<table>
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
				</table>
			</div>
		);
	}
}

export default App;
