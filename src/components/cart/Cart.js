import React from "react";
import { TextField, Typography, Grid, Box, Stack, Container } from "@mui/material";

import CartItem from "../catalog/item/cart_item";
const items = require("../../items.json");

const cart = () => {
  return (
    <>
    <Container  sx={{ width: '30%' }}>
      
      <Typography style ={{textAlign: "center"}} variant="h3"> My Cart </Typography><br/>

      <Stack container direction="column" justify="center" spacing={6}>
        {items.map((product) => (
          <Stack item key={product.id} xs={12} sm={6} md={4} direction="column">
            <CartItem item={product} />
           
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
