import React from 'react';
import leagueOptions from '../Data/leagueOptions';
import Select from 'react-select';

class LeagueSelect extends React.Component {
	state = {
		selectedOptions: [],
	};

	onInputChange = (inputValue, { action }) => {
		switch (action) {
			case 'clear':
				this.props.clearSelection('league');
				return;
			case 'remove-value':
				this.props.removeValue(inputValue, 'league');
				return;
			case 'select-option':
				this.props.onSelectFn(inputValue, 'league');
				return;
			default:
				return;
		}
	};

	render() {
		const { selectedOption } = this.state;
		return (
			<React.Fragment>
				<Select
					isMulti
					value={selectedOption}
					onChange={this.onInputChange}
					options={leagueOptions}
					placeholder='Select League...'
				/>
			</React.Fragment>
		);
	}
}

export default LeagueSelect;
