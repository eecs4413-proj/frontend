import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CircularProgress,
  Badge,
  Button,
  ButtonGroup
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useImage from './hooks/useImage'

const baseUrl = 'http://localhost:9000';

const CatalogItem = ({ item, user }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const { image, loading, error } = useImage(item.imgsrc)

  const handleAddToCart = (event) => {
    // axios({
    //   method: 'post',
    //   url: baseUrl + '/api/shoppingcart',
    //   headers: {}, 
    //   data: {
    //     userID: 1,
    //     itemID: item.itemNo,
    //     quantity: itemQuantity
    //   }
    // });

    console.log("user: 1, item: " + item.itemNo + ", quantity: " + itemQuantity);
  };


  return (
    <>
      {loading && !error ? (
        <CircularProgress color="primary"/>
        ) : (
          <Card
            style={{
              height: "100%"
            }}
          >
            <CardMedia
              style={{
                height: 200,
                width: 200,
                margin: 'auto'
              }}
              image={image}
              component="img"
            />
            <CardContent>
              <Typography variant="h5" color="primary">{item.name}</Typography>
              <Typography variant="h6" style={{fontWeight: 'bold'}}>${item.price}</Typography>
              <Typography variant="title" noWrap>&nbsp;</Typography>
              <Typography variant="body1">{item.description}</Typography>
              <Box 
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center', 
                  m: 2
                }} 
              >
                <Badge color="secondary" sx={{ paddingRight: 1}} badgeContent={itemQuantity}>
                  <ShoppingCartIcon />{" "}
                </Badge>
                <ButtonGroup>
                  <Button
                    onClick={() => {setItemQuantity(Math.max(itemQuantity - 1, 0));}}
                  >
                    {" "}
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button
                    onClick={() => {setItemQuantity(itemQuantity + 1);}}
                  >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
                </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center', 
                  m: 2
                }} 
              >
                <Button 
                  variant="contained"
                  onClick={handleAddToCart}
                >
                  {"Add To Cart"}
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center', 
                  m: 2
                }} 
              >
                <Button 
                  variant="contained"
                  color="secondary"
                >
                  {"Review"}
                </Button>
              </Box>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
        )
      }
    </>
   );
};

export default CatalogItem;
