import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Box,
  Stack,
  Container,
} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import CartItem from "./cart_item";
import { EighteenMp } from "@mui/icons-material";

const Cart = () => {
  const [shoppingCart, setShoppingCart] = React.useState();
  const [items, setItems] = React.useState([]);
  const userId = localStorage.getItem("UserID");
  const token = localStorage.getItem("Token");
  
  const u = new useNavigate();

  React.useEffect(async ()=>{   
    const itemData = await fetchItems();
    const cartData = await fetchCart();

    handleFilter(itemData, cartData);
    
  }, []);

  const handleFilter = (itemData, cartData) =>{

    console.log({itemData, cartData})
   
      var index1 = Number(cartData.length);
      var index2 = Number(itemData.length)
      var newItems = [];
   
 
      for(var i =0; i< index1; i++)
      {
        for(var j =0; j<index2 ; j++)
        {
          if(cartData[i].itemNo === itemData[j].itemNo)
            newItems.push(itemData[j])   
        }
      }

      setItems(newItems)
      console.log({newItems})
  }

  const handleDelete = async (e) =>{

    console.log(e)
    //todo
     axios({
       method: 'DELETE',
       url:  'http://localhost:9000/api/shoppingcart/'+userId+'/'+e,
       headers: { "Authorization": "Bearer " + token}
     }).then((response) =>{
       console.log(response)
       if(response.status  === 200){
        alert("item removed successfully")
        
        window.location.reload();

       }
    })
      
  }

     const fetchItems= async ()=>{
     return  axios({
        method: 'get',
        url: 'http://localhost:9000/api/item'
      }).then((response) => {
        return response.data ;
        });
    }

    const fetchCart = async  () =>{
     return  axios({
        method: 'get',
        url: 'http://localhost:9000/api/shoppingcart/'+userId
      }).then((response) => {
         return response.data ;

      });
    }
    
    const updateCart = () =>{
      //post the new qty

      // go to next page
     
      u('/checkout');
    }

    
    
  return (
    <>
      <Container sx={{ width: "30%" }}>
        <Typography style={{ textAlign: "center" }} variant="h3">
          {" "}
          My Cart{" "}
        </Typography>
        <br />

        <Stack container direction="column" justify="center" spacing={6}>
          {items.map((product) => (
            <Stack
              item
              key={product.itemNo}
              xs={12}
              sm={6}
              md={4}
              direction="column"
            >
              <CartItem item={product} handleDelete ={handleDelete}  />
            </Stack>
          ))}
        </Stack>
        <br />
        <div style={{ display: "flex" }}>
          <button onClick ={updateCart} style={{ marginLeft: "auto" }}>checkout</button>
        </div>
        <br />
      </Container>
    </>
  );
};
export default Cart;
