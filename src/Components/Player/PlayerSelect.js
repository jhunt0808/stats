import React from 'react';
import playersDropdown from '../../Data/players';
import Select from 'react-select';

class PlayerSelect extends React.Component {
	state = {
		selectedPlayers: []
	};

	onInputChange = (inputValue, { action }) => {
		switch (action) {
			case 'clear':
				this.props.clearSelection();
				return;
			case 'remove-value':
				this.props.removeValue(inputValue);
				return;
			case 'select-option':
				this.props.onSelectFn(inputValue);
				return;
			default:
				return;
		}
	};

	render() {
		const { selectedPlayer } = this.state;

		return (
			<React.Fragment>
				<Select
					isMulti={true}
					value={selectedPlayer}
					onChange={this.onInputChange}
					options={playersDropdown}
					placeholder='Select Players To Compare...'
				/>
			</React.Fragment>
		);
	}
}

export default PlayerSelect;
