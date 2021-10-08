import { useState, useEffect } from 'react';

import { getAll, del } from '../../../api/users';

import {   DataGrid,
  GridApi,
  GridCellValue } from '@mui/x-data-grid';
import Button from "@material-ui/core/Button";

export default Index;

const columns = [
    { field: 'id', headerName: 'ID', width: 250 },
    {
      field: 'name',
      headerName: 'name',
      width: 350,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 350,
    },
    {
        field: "",
        headerName: "Delete",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (params: any) => {
          const onClick = () => {
            const api: GridApi = params.api;
            const fields = api
              .getAllColumns()
              .map((c) => c.field)
              .filter((c) => c !== "__check__" && !!c);
            const thisRow: Record<string, GridCellValue> = {};
    
            fields.forEach((f) => {
              thisRow[f] = params.getValue(f);
            });
    
            del(thisRow.id);
          };
    
          return <Button onClick={onClick}>Delete</Button>;
        }
      },
  ];


function Index() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAll().then(x => setUsers(x.map(x =>{
            const res = {
            id : x._id,
            name : x.name,
            email : x.email
            }
            return res; 
        })));
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
    );

}