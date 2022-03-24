import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Catalog } from "./components";
import Checkout from "./components/checkout/Checkout";
import './App.css';
import { ListItemSecondaryAction } from "@mui/material";

const App = () => {

  return (
    <Router>
      <Navbar  />
      <div className="App">
        <Routes>
          <Route exact path="/catalog" element={<Catalog />}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
