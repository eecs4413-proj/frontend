import React from "react";
import { TextField, Typography, Grid, Box } from "@mui/material";

import CatalogItem from '../catalog/item';
const items = require('../../items.json');

const cart = ()=> {
  


  return (
    <>
     <Typography variant="h3" > My Cart </Typography>
    <TextField type = "number" InputProps={{ inputProps: { min: 0, max: 10 } }}/>
    <Grid item xs={12}>
        <Box m={2} pt={3}>
          <Grid container direction="row"justify="center" spacing={6}>
              {items.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} >
                      <CatalogItem item={product} />
                  </Grid>
              ))}
          </Grid>      
        </Box>
      </Grid>
    </>
  );
}
export default cart;
