import React from 'react';
import StatsTable from './StatsTable';

class App extends React.Component {

	state = {
		players: [],
		stats: [],
	};



	render() {
		 
		return (
			
			<div className="App">
				<StatsTable />
			</div>
		);
	}
}

export default App;
