import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Catalog} from "./components";
import RegisterContainer  from "./components/register/RegisterContainer";
import LoginContainer  from "./components/login/LoginContainer";
import Checkout from "./components/checkout/Checkout";
import Cart from "./components/cart/Cart";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListItemSecondaryAction } from "@mui/material";

const App = () => {


  return (
    <Router>
      <Navbar  />
      <div className="App">
        <Routes>
          <Route  exact path ="/register" element={<RegisterContainer />} />
          <Route  exact path ="/login" element={<LoginContainer />} />
          <Route exact path="/catalog" element={<Catalog />}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
