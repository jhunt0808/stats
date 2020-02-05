import React from "react";
import yearSelectOptions from "../Data/YearOptions";
import Select from "react-select";

class YearSelect extends React.Component {
	state = {
		yearOptions: []
	};

	onYearInputChange = (inputValue, { action }) => {
		switch (action) {
			case "clear":
				this.props.clearSelection("years");
				return;
			case "remove-value":
				this.props.removeValue(inputValue, "years");
				return;
			case "select-option":
				this.props.onSelectFn(inputValue, "years");
				return;
			default:
				return;
		}
	};

	render() {
		const { yearOption } = this.state;

		return (
			<React.Fragment>
				<Select
					isMulti
					value={yearOption}
					onChange={this.onYearInputChange}
					options={yearSelectOptions}
					width="400px"
					placeholder="Select Years..."
				/>
			</React.Fragment>
		);
	}
}

export default YearSelect;
