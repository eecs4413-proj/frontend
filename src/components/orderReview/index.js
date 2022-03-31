import React from "react";
import {
  TextField,
  Typography,
  Box,
  Stack,
  Button,
  Container,

} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const OrderReview = () => {
 //get all of the orders
    const mockOrder = [
        ["id1","coke","2.99","3","8.97"],
        ["id2","MuscleMilk","3.99","10", "39.9"]
    ];

    
    var totalCost=0;
    const summary =() =>{
        for(var i=0; i< mockOrder.length; i++)
        {
           totalCost += Number(mockOrder[i][2])* Number(mockOrder[i][3])
        }
    }
  return (
    <>
    <body onLoad={summary()}></body>
      <Container sx={{width:"50%"}}>
          <Box>
    <Typography sx={{textAlign:"center"}}  variant="h4">Order Summary</Typography>         
    <TableContainer sx={{maxWidth: 400, marginLeft:"auto", marginRight:"auto"}}  component={Paper}>
      <Table  sx={{maxWidth: 400}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            
            <TableCell align="left">Item Name</TableCell>
            <TableCell align="left">Cost&nbsp;($)</TableCell>
            <TableCell align="left">Quantity&nbsp;</TableCell>
            <TableCell align="left">Total Cost&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockOrder.map((row) => (
            <TableRow>
              
              <TableCell align="left">{row[1]}</TableCell>
              <TableCell align="center">{row[2]}</TableCell>
              <TableCell align="center">{row[3]}</TableCell>
              <TableCell align="center">{row[4]}</TableCell>
            </TableRow>
          ))}

           
        </TableBody>
      </Table>
      <Table  sx={{maxWidth: 400}} size="small" aria-label="a dense table">
       
        <TableBody>
               <TableRow>
              
              <TableCell align="left">{"Total Cost: "}</TableCell>
              <TableCell align="center">{""}</TableCell>
              <TableCell align="center">{""}</TableCell>
              <TableCell align="center">{Math.round(totalCost*100)/100}</TableCell>
              
            </TableRow>
                
        </TableBody>
      </Table>
    </TableContainer>
<br/>
    <Button sx={{marginLeft:"50%", width:"200px"}} variant="contained">Confirm Order</Button>
    </Box>
      </Container>
    </>
  );
};
export default OrderReview;
