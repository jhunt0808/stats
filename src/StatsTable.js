import React from 'react';
import DataTable from 'react-data-table-component';
import statsData from './stats';
import Filter from './Filter';
import columns from './Columns';

const customStyles = {
  headCells: {
    style: {
      'align-items': 'center',
      paddingLeft: '10px',
      paddingRight: '10px',
    }
  },
  cells: {
    style: {
      paddingLeft: '10px',
      paddingRight: '10px',
    }
  }
}

const StatsTable = () => {
   //const [filterText, setFilterText] = React.useState('');
   //const filteredItems = statsData.filter(item => item.First.toLowerCase() && item.First.toLowerCase().includes(filterText.toLowerCase()));

   const [filterText, setFilterText] = React.useState('');
   const [sessionSH, setSessionSH] = React.useState('');
   const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
   let filteredItems = [];
   

   const filteredItemsFunc = () => {
      filteredItems = statsData.filter(item => item.First.toLowerCase() && item.First.toLowerCase().includes(filterText.toLowerCase()))
      .filter(item => item.Session.includes(sessionSH));
   }

   filteredItemsFunc();
 
   const subHeaderComponentMemo = React.useMemo(() => {
      const handleClear = () => {
         if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
         } 
      };


      const handleSelect = () => {
        console.log('test');
        //  const target = event.target;
        //  const value = target.type === 'checkbox' ? target.checked : target.value;

        // console.log(value);

        //  if (!value){
        //     setResetPaginationToggle(!resetPaginationToggle);
        //     setSessionSH('');
        //  } else {
        //   setSessionSH('SH');
        //  }
      }
 
      return <Filter onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} onSelectFn={() => {console.log('asdf')}}/>;

   }, [filterText, resetPaginationToggle]);
 
   return (
     <DataTable
       title="Softball Stats"
       columns={columns}
       data={filteredItems}
       responsive
       //pagination
       //paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
       subHeader
       subHeaderComponent={subHeaderComponentMemo}
       fixedHeader
       fixedHeaderScrollHeight="600px"
       dense={true}
       persistTableHead
       striped={true}
       highlightOnHover={true}
       customStyles={customStyles}
     />
   );
 };


export default StatsTable;