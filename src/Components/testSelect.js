import React, { Component } from 'react';
import { render } from 'react-dom';
import Select from 'react-select';

const options = [
   { value: 'SH - 1', label: 'SH - 1'},
   { value: 'SH - 2', label: 'SH - 2'},
   { value: 'SH - 3', label: 'SH - 3'},
   { value: 'J2', label: 'J2'},
]

class TestSelect extends React.Component {
  state = {
    selectedOptions: [],
  }

  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions });
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <React.Fragment>
      <Select
        isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      {this.state.selectedOptions.map(o => <p key={o.value}>{o.value}</p>)}
      </React.Fragment>
    );
  }
}

export default TestSelect;
