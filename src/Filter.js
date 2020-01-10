import React from 'react';
import styled from 'styled-components';
import Button from './shared/Button';
import SessionSelect from './Components/SessionSelect';
import YearSelect from './Components/YearSelect';

const TextField = styled.input`
   height: 32px;
   width: 200px;
   border-radius: 3px;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
   border-top-right-radius: 0;
   border-bottom-right-radius: 0;
   border: 1px solid #e5e5e5;
   padding: 0 32px 0 16px;

   &:hover {
      cursor: pointer;
   }
   `;

const ClearButton = styled(Button)`
   border-top-left-radius: 0;
   border-bottom-left-radius: 0;
   border-top-right-radius: 5px;
   border-bottom-right-radius: 5px;
   height: 34px;
   width: 32px;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   `;
   

const Filter = ({filterText, onFilter, onClear, onSelectFn, clearSelection, removeValue}) => {
   return(
      <div>
         <YearSelect onSelectFn={onSelectFn} clearSelection={clearSelection} removeValue={removeValue} />
         <SessionSelect onSelectFn={onSelectFn} clearSelection={clearSelection} removeValue={removeValue} />
         <TextField id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
         <ClearButton onClick={onClear}>X</ClearButton>
      </div>
   )
}

export default Filter;