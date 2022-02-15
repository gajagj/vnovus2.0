import React, { Fragment, useEffect, useState } from "react"
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import axios from "axios";
import { actions } from "../store/reducer";
import { useDispatch } from "react-redux";

export const MyDecision=()=>{
    // const rows=[]
    const dispatch=useDispatch()
    const [decisions,setDecisions]=useState([])
    useEffect(()=>{
         axios.get('http://vnovushome.in/vnovus/api/approval/my_approval_list?approver=3').then(response=>{
            console.log("response",response.data)
            if(response.data.status){
                setDecisions(response.data.myapprovals)
                dispatch(actions.loadMyDecisions(response.data.myapprovals))
            }
        }).catch(error=>{
            console.log("error",error);
        })
        console.log("useEffect called");
    },[])
    console.log("decisions",decisions);
    return <Fragment>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="center">Request</TableCell>
            <TableCell align="center">Requester</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">My Response</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {decisions.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.emp_name}</TableCell>
              <TableCell align="center">{row.target_date}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Fragment>
}