import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Badge,
  Button,
  ButtonGroup,
  ListItem,
  List,
  ListSubheader,
  Grid,
  Rating,
  Modal,
  TextField
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RefreshIcon from '@mui/icons-material/Refresh';
import useImage from './hooks/useImage'

const baseUrl = 'http://localhost:9000';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CatalogItem = ({ item, user }) => {

  const { image, loading, error } = useImage(item.imgsrc)

  const [itemQuantity, setItemQuantity] = useState(0);
  const [openReview, setOpenReview] = useState(false);
  const [itemReviews, setItemReviews] = useState([]);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewStars, setReviewStars] = useState(5);
    
  useEffect(() => {
    axios({
      method: 'get',
      url: baseUrl + '/api/item/review/' + item.itemNo 
    }).then((response) => {
      setItemReviews(response.data);
    });
  }, []);

  const handleAddToCart = (event) => {
    axios({
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

  const handleReviewModal = (event) => {
    setOpenReview(!openReview);
  };

  const handleReviewComment = (event) => {
    setReviewComment(event.target.value);
  };

  const handleReviewRating = (event) => {
    setReviewStars(event.target.value);
  };

  const handleSubmitReview = (event) => {
    if(!reviewComment) {
      alert("Please enter a valid comment!");
      return;
    }
    axios({
      method: 'post',
      url: baseUrl + '/api/item/review',
      headers: {}, 
      data: {
        itemNo: item.itemNo,
        rate: reviewStars,
        description: reviewComment
      }
    });
  };

  const handleRefreshReview = (event) => {
    axios({
      method: 'get',
      url: baseUrl + '/api/item/review/' + item.itemNo 
    }).then((response) => {
      setItemReviews(response.data);
    });
  }

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
                  onClick={handleReviewModal}
                >
                  {"Review"}
                </Button>
              </Box>
            </CardContent>
            <div>
              <Modal
                open={openReview}
                onClose={handleReviewModal}
              >
                <Box sx={modalStyle}>
                  <Grid container item xs={12}>
                    <Grid item xs={10}>
                      <Typography variant="h5">
                        Customer Reviews
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <RefreshIcon onClick={handleRefreshReview} />
                    </Grid>
                  </Grid>
                  <List>
                    {itemReviews.map((review) => (
                      <li key={review.reviewNo}>
                        <ul>
                          <ListSubheader>{review.description}</ListSubheader>
                            <ListItem >
                              <Rating value={review.rate} readOnly/>
                            </ListItem>
                        </ul>
                      </li>
                    ))}
                  </List>
                    <Typography variant="body1" style={{ margin: 10 }}>
                      Add Your Review:
                    </Typography>
                    <TextField
                      label="Review Comment"
                      InputLabelProps={{
                        shrink: true
                      }}
                      onChange={handleReviewComment}
                      style={{ margin: 10 }}
                    />
                    <TextField
                      label="Rating"
                      type="number"
                      defaultValue={5}
                      InputLabelProps={{
                        shrink: true
                      }}
                      InputProps={{
                        inputProps: { 
                            max: 5, min: 0 
                        }
                      }}
                      onChange={handleReviewRating}
                      style={{ margin: 10 }}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleSubmitReview}
                      style={{ margin: 10 }}
                    >
                      {"Submit Review"}
                    </Button>

                </Box>
              </Modal>
            </div>
        </Card>
        )
      }
    </>
   );
};

export default CatalogItem;
