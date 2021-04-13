import React, { useContext, useState } from 'react'
import './RecentSearch.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { UserContext } from './../Context';

  export default function RecentSearch() {
    const user = useContext(UserContext)
    
    const data = user.sessionhistory;
    console.log(data);
    const [rows, setRowData] = useState([]);

    const classes = useStyles();
  
    return (
        <div className="recentsearch">  
        <h4 className="recentsearch__title">Recent Search</h4>
        <TableContainer component={Paper}>
            <Table className="recentsearch__table" aria-label="simple table">
                <TableHead>
                <TableRow>
                <TableCell>Domain</TableCell>
                <TableCell align="right">Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
  }
