import axios from 'axios'
import { useState,useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from "@material-ui/icons/Search";



const MyTable = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        
        axios.get('https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard')
        .then((response) => {
          setData(response.data.data);
          console.log(response.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])



    return (
        <TableContainer component={Paper}>
        <Table className="" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight:"bolder"}}>Keywords</TableCell>
              <TableCell></TableCell>
              <TableCell  style={{fontWeight:"bolder"}} align="right">Goal</TableCell>
              <TableCell  style={{fontWeight:"bolder"}} align="right">Matches</TableCell>
              <TableCell  style={{fontWeight:"bolder"}} align="right">Search Status</TableCell>
              <TableCell   style={{fontWeight:"bolder"}} align="right">Delete Keyword</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map((myData) => (
              
              <TableRow key={myData.id}>
                <TableCell component="th" scope="row">
                  {myData.keyword}
                </TableCell>
                <TableCell align="right"><SearchIcon/></TableCell>
                <TableCell align="right">{myData.goal}</TableCell>
                <TableCell align="right">{myData.matches}</TableCell>
                <TableCell align="right">{myData.search_status}</TableCell>
                <TableCell align="right"><DeleteIcon/></TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default MyTable
