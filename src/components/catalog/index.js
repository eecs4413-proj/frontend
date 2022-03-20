import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Grid
} from "@mui/material";
import Item from './item';

const Catalog = ({ products }) => {

  return (
    <Box m={2} pt={3}>
      <Grid container justify="center" spacing={6}>
          {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} >
                  <Item item={product} />
              </Grid>
          ))}
      </Grid>
  </Box>

  );
};

export default Catalog;
