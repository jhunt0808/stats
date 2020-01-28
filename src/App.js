import React from 'react';
import StatsTable from './Components/StatsTable';

class App extends React.Component {

	state = {
		players: [],
		stats: [],
	};

	render() {
		
		return (
			<>
				<StatsTable />
			</>
		);
	}
}

export default App;
