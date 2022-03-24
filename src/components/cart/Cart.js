import React from "react";
import { TextField, Typography, Grid, Box, Stack, Container } from "@mui/material";

import CatalogItem from "../catalog/item";
const items = require("../../items.json");

const cart = () => {
  return (
    <>
    <Container  sx={{ width: '50%' }}>
      
      <Typography style ={{textAlign: "center"}} variant="h3"> My Cart </Typography>
      <br/>

      <Stack container direction="column" justify="center" spacing={6}>
        {items.map((product) => (
          <Stack item key={product.id} xs={12} sm={6} md={4} direction="column">
            <CatalogItem item={product} />
            <TextField
              justify="right"
              id={product.id}
              type="number"
              defaultValue ={1}
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          </Stack>
        ))}
      </Stack>
      <br />
      <div style={{ display: "flex" }}>
        <button style={{ marginLeft: "auto" }}>checkout</button>
      </div>
      <br/>
      </Container>
    </>
  );
};
export default cart;
