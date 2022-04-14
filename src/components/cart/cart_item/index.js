import React from "react";
import { Link, useLocation } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CircularProgress,
  TextField, Stack, IconButton
  
} from "@mui/material";

import useImage from '../hooks/useImage'


const CartItem = ({ item, handleDelete }) => {
  const { image, loading, error } = useImage(item.img)


  return (
    <>
      {loading && !error ? (
        <CircularProgress color="primary"/>
        ) : (
          <Card
            style={{
              height: "100%",
              width: "100%"
            }}
          >
            <IconButton style={{ marginLeft: "85%" }} aria-label="delete" size="large">
            <DeleteIcon onClick = {()=>{handleDelete(item.itemNo)}} fontSize="inherit" />
            </IconButton>

            <CardMedia            
              style={{
                height: 200,
                width: 100,
                margin: 'auto'
              }}
              image={image}
              component="img"
            />
            <CardContent>
           
              <Typography variant="h5" color="primary">{item.name}</Typography>
              <Typography variant="h6" style={{fontWeight: 'bold'}}>${item.price}</Typography>
              <Typography variant="title" noWrap>&nbsp;</Typography>
                 <br/>         
              <TextField  style={{ width: "100%" }} variant="outlined" label="Quantity" justify="right" type="number" defaultValue ={1} InputProps={{ inputProps: { min: 1, max: 10 } }}/>
           
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
        )
      }
    </>
   );
};

export default CartItem;
