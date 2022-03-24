import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import CatalogItem from './item';

const items = require('../../items.json');
const types = [];
const brands = [];

for (var i = 0; i < items.length; i++) {
  types.indexOf(items[i].type) === -1 && types.push(items[i].type);
  brands.indexOf(items[i].brand) === -1 && brands.push(items[i].brand);
}

const Catalog = () => {
  const [checkedTypes, setCheckedTypes] = useState(types);
  const [checkedBrands, setCheckedBrands] = useState(brands);

  const handleCheckedAllTypes = (event) => {
    var state = event.target.checked;

    if (state) {
      setCheckedTypes(types);
    } else {
      setCheckedTypes([]);
    }
  };

  const handleCheckedType = (event) => {
    var state = event.target.checked;
    var value = event.target.value;
    var index = checkedTypes.indexOf(value);

    if (state) {
      index === -1 && setCheckedTypes(oldArray => [...oldArray, value]);
    } else {
      index !== -1 && setCheckedTypes(checkedTypes.filter(item => item !== value));
    }
  };

  const handleCheckedAllBrands = (event) => {
    var state = event.target.checked;

    if (state) {
      setCheckedBrands(brands);
    } else {
      setCheckedBrands([]);
    }
  };

  const handleCheckedBrand = (event) => {
    var state = event.target.checked;
    var value = event.target.value;
    var index = checkedBrands.indexOf(value);

    if (state) {
      index === -1 && setCheckedBrands(oldArray => [...oldArray, value])
    } else {
      index !== -1 && setCheckedBrands(checkedBrands.filter(item => item !== value));
    }
  };

  const [filteredTypes, setFilteredTypes] = useState(types);
  const [filteredBrands, setFilteredBrands] = useState(brands);

  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={4}>
        <Box sx={{ border: 1 }} m={5} pt={3}>
          <Grid container justifyContent="flex">
            <Typography variant="h6" color="primary" style={{ marginLeft: 16 }}>FILTER BY:</Typography>
          </Grid>
          <Grid container justifyContent="flex">
            <FormControlLabel
              style={{ marginLeft: 16 }}
              label="Type"
              control={
                <Checkbox
                  checked={checkedTypes.length === types.length}
                  onChange={handleCheckedAllTypes}
                />
              }
            />
          </Grid>
          {types.map((type) => (
            <Grid container key={type} justifyContent="flex">
              <FormControlLabel
                style={{ marginLeft: 30 }}
                label={type}
                control={
                  <Checkbox
                    checked={checkedTypes.indexOf(type) !== -1}
                    onChange={handleCheckedType}
                    value={type}        
                  />
                }
              />
            </Grid>
          ))}
          <Grid container justifyContent="flex">
            <FormControlLabel
              style={{ marginLeft: 16 }}
              label="Brand"
              control={
                <Checkbox
                  checked={checkedBrands.length === brands.length}
                  onChange={handleCheckedAllBrands}
                />
              }
            />
          </Grid>
          {brands.map((brand) => (
            <Grid container key={brand} justifyContent="flex">
              <FormControlLabel
                style={{ marginLeft: 30 }}
                label={brand}
                control={
                  <Checkbox
                    checked={checkedBrands.indexOf(brand) !== -1}
                    onChange={handleCheckedBrand}
                    value={brand}
                  />
                }
              />
            </Grid>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box m={2} pt={3}>
          <Grid container direction="row"justify="center" spacing={6}>
              {items.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} >
                      <CatalogItem item={product} />
                  </Grid>
              ))}
          </Grid>      
        </Box>
      </Grid>
    </Grid>
  );
};

export default Catalog;
