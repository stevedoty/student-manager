import React, { useState, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {getStudents, deleteStudents, updateStudents} from '../api'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const StudentList = () => {
  React.useEffect(() => {
      getStudents().then((resp)=>{
        setRowData(resp.data);
      })
  }, []);

  const gridRef = useRef();

   const [rowData, setRowData] = useState([]);

   const [columnDefs] = useState([
       { field: 'firstName', checkboxSelection: true },
       { field: 'lastName' },
       { field: 'userName' },
       { field: 'schoolName' },
       { field: 'license' }
   ])

   const onRowValueChanged = (event) => {
     var data = event.data;
     updateStudents(data)
   }

  const onRemoveSelected = useCallback(() => {
    const selectedData = gridRef.current.api.getSelectedRows();
    if (selectedData.length){
      deleteStudents(selectedData).then(()=>{
        const res = gridRef.current.api.applyTransaction({ remove: selectedData });
        console.log(res);
      })
    }
  }, []);

   return (
       <div className="ag-theme-alpine" style={{height: "90vh", width: 1024}}>
       <button onClick={onRemoveSelected}>Remove Selected</button>
           <AgGridReact
              ref={gridRef}
               rowData={rowData}
               columnDefs={columnDefs}
               defaultColDef={{editable:true}}
               editType={'fullRow'}
               onRowValueChanged={onRowValueChanged}
               rowSelection={'multiple'}
               />
       </div>
   );
};

export default StudentList;
