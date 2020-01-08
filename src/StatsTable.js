import React from 'react';
import styled from 'styled-components';
import Button from './shared/Button';
import DataTable from 'react-data-table-component';
import statsData from './stats';
import Filter from './Filter';


const FilterComponent = ({ filterText, onFilter, onClear, onCheckbox }) => (
   <>
     <label>
         SH:
         <input
         name="SH"
         type="checkbox"
         onChange={onCheckbox} />
      </label>
     <TextField id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
     <ClearButton onClick={onClear}>X</ClearButton>
   </>
);

 const columns = [
   {
     name: 'Year',
     selector: 'Year',
     sortable: true,
   },
   {
     name: 'Session',
     selector: 'Session',
     sortable: true,
   },
   {
      name: 'Player',
      sortable: true,
      selector: 'First',
      cell: row => <div><a href={`${row.First}-${row.Last}`}>{row.First} {row.Last}</a></div>,
      grow: 8,
    },
    {
      name: 'AB',
      selector: 'AB',
      sortable: true,
    },
    {
      name: 'H',
      selector: 'Hits',
      sortable: true,
    },
    {
      name: '1B',
      selector: 'S',
      sortable: true,
    },
    {
      name: '2B',
      selector: 'D',
      sortable: true,
    },
    {
      name: '3B',
      selector: 'T',
      sortable: true,
    },
    {
      name: 'HR',
      selector: 'HR',
      sortable: true,
    },
    {
      name: 'R',
      selector: 'R',
      sortable: true,
    },
    {
      name: 'RBI',
      selector: 'RBI',
      sortable: true,
    },
    {
      name: 'BB',
      selector: 'BB',
      sortable: true,
    },
    {
      name: 'SO',
      selector: 'K',
      sortable: true,
    },
    {
      name: 'SF',
      selector: 'SF',
      sortable: true,
    },
    {
      name: 'FC',
      selector: 'FC',
      sortable: true,
    },
    
 ];

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

const StatsTable = () => {
   //const [filterText, setFilterText] = React.useState('');
   //const filteredItems = statsData.filter(item => item.First.toLowerCase() && item.First.toLowerCase().includes(filterText.toLowerCase()));

   const [filterText, setFilterText] = React.useState('');
   const [sh, setSh] = React.useState('');
   const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
   let filteredItems = [];
   

   const filteredItemsFunc = () => {
      filteredItems = statsData.filter(item => item.First.toLowerCase() && item.First.toLowerCase().includes(filterText.toLowerCase()) && item.Session.includes(sh));
   }

   filteredItemsFunc();
 
   const subHeaderComponentMemo = React.useMemo(() => {
      const handleClear = () => {
         if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
         } 
      };

      

      const handleCheck = (event) => {
         const target = event.target;
         const value = target.type === 'checkbox' ? target.checked : target.value;

         if (sh){
            setResetPaginationToggle(!resetPaginationToggle);
            setSh('');
         } else {
            setSh('SH');
         }

         
         console.log(value);

         if(value === true){
            filteredItems = filteredItems.filter(item => item.Session.includes("SH"));
         }
      }
 
     return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} onCheckbox={handleCheck} />;
   }, [filterText, resetPaginationToggle]);
 
   return (
     <DataTable
       title="Softball Stats"
       columns={columns}
       data={filteredItems}
       responsive
       pagination
       paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
       subHeader
       subHeaderComponent={subHeaderComponentMemo}
       fixedHeader
       fixedHeaderScrollHeight="600px"
       dense={true}
       persistTableHead
     />
   );
 };
   

   //  const FilterComponent = ({ filterText, onFilter, onClear }) => (
   //    <>
   //       <input type="text" id="search" placeholder="Filter By Player Name" value={filterText} onChange={onFilter} />
         
   //      {/* <TextField id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
   //      <ClearButton onClick={onClear}>X</ClearButton> */}
   //    </>
   //  );

   //  const subHeaderComponentMemo = React.useMemo(() => {
   //    const handleClear = () => {
   //      if (filterText) {
   //        setFilterText('');
   //      }
   //    };
  
   //    return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
   //  }, [filterText]);

//    return (
//       <div>
//          <Filter filterText={filterText} onFilter={e => setFilterText(e.target.value)} />
//          <DataTable
// 					title="Softball Stats"
// 					columns={columns}
//                //data={statsData}
//                data={filteredItems}
// 					//responsive={false}
// 					fixedHeader
// 					fixedHeaderScrollHeight="600px"
// 					dense={true} 
// 					//subHeader
//                //subHeaderComponent={subHeaderComponentMemo}
//                persistTableHead={true}
// 				/>
//       </div>
//    )
// }


export default StatsTable;