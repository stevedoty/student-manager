import React, { useState, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {getStudents} from '../api'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const StudentList = () => {
    const gridRef = useRef();

   const [rowData] = useState([
    {firstName: 'jo',
    lastName: 'do',
    userName: 'yo',
    schoolName: 'sj',
    license: 'licensed',},
    {firstName: 'jo',
    lastName: 'do',
    userName: 'yo',
    schoolName: 'sj',
    license: 'licensed',},
   ]);

   const [columnDefs] = useState([
       { field: 'firstName', checkboxSelection: true },
       { field: 'lastName' },
       { field: 'userName' },
       { field: 'schoolName' },
       { field: 'license' }
   ])

   React.useEffect(() => {
       getStudents()
   }, []);

   const onSelectionChanged = (grid) => {
     const selectedRows = grid.api.getSelectedRows();
console.log(selectedRows);
   }

  const onRemoveSelected = useCallback(() => {
    const selectedData = gridRef.current.api.getSelectedRows();
    const res = gridRef.current.api.applyTransaction({ remove: selectedData });
    console.log(res);
  }, []);

   return (
       <div className="ag-theme-alpine" style={{height: "90vh", width: 1024}}>
       <button onClick={onRemoveSelected}>Remove Selected</button>
           <AgGridReact
              ref={gridRef}
               rowData={rowData}
               columnDefs={columnDefs}
               defaultColDef={{editable:true}}
               rowSelection={'multiple'}
               onSelectionChanged={onSelectionChanged}
               />
       </div>
   );
};

export default StudentList;
