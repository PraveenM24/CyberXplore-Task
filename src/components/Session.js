import React, { useContext, useState , useEffect } from 'react'
import './Session.css';
import { Button } from '@material-ui/core';
import { UserContext } from './../Context';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReactTimeago from 'react-timeago';

function Session() {
    const user = useContext(UserContext);
    const [domain, setDomain] = useState();
    const history = useHistory();

    const [rows, setRowData] = useState([]);

    window.onload = () => {
        if (!user.domain){
            history.push('/');
        }
    }

    useEffect(() => {
        var temp = null
        var obj = []
        user.sessionhistory.forEach((element, index) => {
            if (element.domain != temp){
                var tempobj = [] 
                temp = element.domain
                tempobj = [{domain: element.domain, timestamp: element.timestamp}]
                obj = obj.concat(tempobj)
            }
        })
        setRowData(obj)
    }, []);

    const searchDomain = e => {
        e.preventDefault();
        user.domain = domain;
        history.push('/result');
    }   

    return (
        <div className="session">
            <div className="session__card">
                <h4>A Fast Subdomain Enumeration Tool With IP Resolving & HTTP Status Code Presented By  </h4>
                <img src="https://edu.cyberxplore.com/wp-content/uploads/2020/06/4.png" height="50px"/>
            </div>   
            {/* <h4 className="session__subtitle">Enter the domain</h4> */}
            <form className="session__input"  
                    onSubmit={searchDomain}>
                <input     
                    onChange = {e => setDomain(e.target.value)}
                    placeholder="Enter the domain"
                    required
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                > Search 
                </Button>
            </form>
            <h4 className="session__title">Recent Search</h4>
            <TableContainer  width={'57.3%'} className="session__table" component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                <TableCell>Domain</TableCell>
                <TableCell align="right">Searched</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map(row => (
            <TableRow >
              <TableCell component="th" scope="row">
                {row.domain}
              </TableCell>
              <TableCell align="right"><ReactTimeago date={row.timestamp}/></TableCell>
            </TableRow>
            ))}
            </TableBody>
            </Table>
        </TableContainer>

        </div>
    )
}

export default Session
