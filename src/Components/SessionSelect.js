import React from "react";
import sessionOptions from "../Data/SessionOptions";
import Select from "react-select";

class SessionSelect extends React.Component {
	state = {
		selectedOptions: []
	};

	onInputChange = (inputValue, { action }) => {
		switch (action) {
			case "clear":
				this.props.clearSelection("sessions");
				return;
			case "remove-value":
				this.props.removeValue(inputValue, "sessions");
				return;
			case "select-option":
				this.props.onSelectFn(inputValue, "sessions");
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
					options={sessionOptions}
					placeholder="Select Sessions..."
				/>
			</React.Fragment>
		);
	}
}

export default SessionSelect;
