import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Catalog} from "./components";
import RegisterContainer  from "./components/register/RegisterContainer";
import LoginContainer  from "./components/login/LoginContainer";
import { Navbar, Catalog } from "./components";
import Checkout from "./components/checkout/Checkout";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListItemSecondaryAction } from "@mui/material";

const App = () => {


  return (
    <Router>
      <Navbar  />
      <div className="App">
        <Routes>

          <Route exact path="/catalog" element={<Catalog products={items}/>}/>
          <Route  exact path ="/register" element={<RegisterContainer />} />
          <Route  exact path ="/login" element={<LoginContainer />} />
          <Route exact path="/catalog" element={<Catalog />}/>
          <Route exact path="/checkout" element={<Checkout/>}/>

        </Routes>
      </div>
    </Router>

  );
}

export default App;
