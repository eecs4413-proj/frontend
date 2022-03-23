import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Catalog } from "./components";
import Checkout from "./components/checkout/Checkout";
import './App.css';
import { ListItemSecondaryAction } from "@mui/material";

const App = () => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    const temp = require('./items.json');
    
    setItems(temp);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Router>
      <Navbar  />
      <div className="App">
        <Routes>
          <Route exact path="/catalog" element={<Catalog products={items}/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
