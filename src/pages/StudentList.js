import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const StudentList = () => {
   const [rowData] = useState([
       {firstName: 'jo',
         lastName: 'do',
         userName: 'yo',
         schoolName: 'sj',
         license: 'licensed',}
   ]);

   const [columnDefs] = useState([
       { field: 'firstName' },
       { field: 'lastName' },
       { field: 'userName' },
       { field: 'schoolName' },
       { field: 'license' }
   ])

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   );
};

export default StudentList;
