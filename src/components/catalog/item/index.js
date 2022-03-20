import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography
} from "@mui/material";

import tmp from "./tmp.png";

const Item = ({ item }) => {
  return (
    <Card >
      <CardMedia>
        <img src={tmp} alt="Temp"/>
      </CardMedia>
      <CardContent>
        <div >
          <Typography variant="h5" gutterBottom>
            {item.name}
          </Typography>

          <Typography variant="h5">
            ${item.price}
          </Typography>
        </div>

        <Typography dangerouslySetInnerHTML={{ __html: item.details}} variant="body2" color="textSecondary" />
       </CardContent>
       <CardActions >

       </CardActions>
    </Card>
   );
};

export default Item;
