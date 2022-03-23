import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CircularProgress
} from "@mui/material";

import useImage from './hooks/useImage'


const Item = ({ item }) => {
  const { image, loading, error } = useImage(item.img)

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
              <Typography variant="body1">{item.details}</Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
        )
      }
    </>
   );
};

export default Item;
