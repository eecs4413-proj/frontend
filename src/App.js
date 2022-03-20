import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Catalog } from "./components";
import './App.css';
import { ListItemSecondaryAction } from "@mui/material";

const App = () => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    const temp = [
      {
        "id": 1,
        "name": "ITEM 1",
        "type": "TYPE 1",
        "brand": "BRAND 1",
        "price": 10,
        "details": "This is item 1 ...",
        "img": "./temp-item.png"
      },
      {
        "id": 2,
        "name": "ITEM 2",
        "type": "TYPE 2",
        "brand": "BRAND 1",
        "price": 100,
        "details": "This is item 2 ...",
        "img": "./temp-item.png"
      },
      {
        "id": 3,
        "name": "ITEM 3",
        "type": "TYPE 3",
        "brand": "BRAND 1",
        "price": 1000,
        "details": "This is item 3 ...",
        "img": "./temp-item.png"
      }
    ]
    
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
