import React, {useEffect, useState, useContext} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {v4 as uuid} from 'uuid';
import "./Datatable.css";
import {UserContext} from './../Context';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function DataTable() {

    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
  
      return () => {
        clearInterval(timer);
      };
    }, []);

    const user = useContext(UserContext)
    const history = useHistory();
    const columns = [
      { field: 'subdomain', headerName: 'Sub-Domain', width: 250 },
      { field: 'ip', headerName: 'IP', width: 150 },
      { field: 'statuscode', headerName: 'Status Code', width: 140 },
      { field: 'updatedon', headerName: 'Updated On', width: 240 },
      { field: 'id', headerName: 'ID', width: 0 },
    ];

    const [rows, setRowData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`https://subbuster.cyberxplore.com/api/find?domain=${user.domain}`)
      .then(result => result.json())
      .then(rowData => {
          rowData.data.forEach(element => {
              var id = uuid();
              JSON.stringify(element)
              element["id"] = id
              element["timestamp"] = new Date()
          });
          setRowData(rowData.data);
          setLoading(false)
          user.sessionhistory = user.sessionhistory.concat(rowData.data);
      })
    }, []);

    const goBack = e => {
      history.push('/session');
    }

  return (
    <div className="datatable">
      <h4 className="datatable__title">Search Results</h4>
      <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          onClick={goBack}
      > Bust More Domains 
      </Button>
      <div className="datatable__data" style={{ height: 650, width: 840 }}>
          {loading ? <CircularProgress className="datatable__loader"/>
                   : <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
          }
      </div>
    </div>
  );
}
