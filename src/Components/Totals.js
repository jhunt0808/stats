import React from 'react';
import DataTable from 'react-data-table-component';
import columns from '../Columns';


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

const Totals = (filteredItems) => {

     const totals = filteredItems.data[0];

     let pa = 0;
     let ab = 0;
     let hits = 0;
     let s = 0;
     let d = 0;
     let t = 0;
     let hr = 0
     let bb = 0;
     let sf = 0;
     let fc = 0;
     let k = 0;
     let rbi = 0;
     let r = 0;
     let avg = 0.000;
     let obp = 0.000;
     let slg = 0.000;
     let ops = 0.000;
     let barisp = 0.000;
     let lob = 0;
     let twooutrbi = 0; 



     for (var i = 0; i < totals.length; i++) { 
          pa += totals[i].PA;
          ab += totals[i].AB;
          hits += totals[i].Hits;
          s += totals[i].S;
          d += totals[i].D;
          t += totals[i].T;
          hr += totals[i].HR;
          bb += totals[i].BB;
          sf += totals[i].SF;
          fc += totals[i].FC;
          k += totals[i].K;
          rbi += totals[i].RBI;
          r += totals[i].R;
          barisp += totals[i].BARISP;
          lob += totals[i].LOB;
          twooutrbi += totals[i].TWOOUTRBI;
     }
     barisp = barisp/i;

     // if ab = 0, 0
     // hits / ab
     if(ab === 0){
          avg = 0;
     } else {
          avg = (hits / ab);
     }

     // if ab + bb + sf = 0, 0
     // (hits + bb)/(ab + bb + sf)
     if(ab === 0){
          obp = 0;
     } else {
          obp = (hits + bb)/(ab + bb + sf);
     }

     // if ab = 0, 0
     // ((s + (2 * d) + (3 * t) + (4 * hr)) / ab)
     if(ab === 0){
          slg = 0;
     } else {
          slg = ((s + (2 * d) + (3 * t) + (4 * hr)) / ab);
     }

     // obp + slg
     ops = obp + slg;
     
     let totalsData = [
          {
               "id": 1,
               "Year": "",
               "Session": "",
               "First": "Totals",
               "Last": "",
               "PA": pa,
               "AB": ab,
               "Hits": hits,
               "S": s,
               "D": d,
               "T": t,
               "HR": hr,
               "BB": bb,
               "SF": sf,
               "FC": fc,
               "K": k,
               "RBI": rbi,
               "R": r,
               "AVG": avg,
               "OBP": obp,
               "SLG": slg,
               "OPS": ops,
               "BARISP": barisp,
               "LOB": lob,
               "TWOOUTRBI": twooutrbi,
          }
     ]


     return (

          <DataTable
               columns={columns}
               data={totalsData}
               customStyles={customStyles}
               noHeader={true}
               noTableHead={true}
          />
     )
}

export default Totals;