import React from 'react';
import Select from 'react-select';

const options = [
   { value: 'SH - 1', label: 'SH - 1'},
   { value: 'SH - 2', label: 'SH - 2'},
   { value: 'SH - 3', label: 'SH - 3'},
   { value: 'J2', label: 'J2'},
]

const SelectSession = (onSelectFn) => {
   return (
   <Select
      isMulti
      name="Sessions"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={() => {console.log(this.state.selectValue)}}
   />
   );
};

export default SelectSession;