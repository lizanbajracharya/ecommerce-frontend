import {
  Checkbox,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const FilterComponentItem = ({
  setValue,
  value,
  handleClose,
  setPrice,
  setBrand,
  price,
  brand,
  sort,
  setSort,
  setSelectedValue,
  selectedValue,
}) => {
  const handlerColor = (e) => {
    setValue(e.target.value);
    handleClose();
  };

  const handlerBrand = (e) => {
    setBrand(e.target.value);
    handleClose();
  };
  const handlerPrice = (e) => {
    setPrice(e.target.value);
    handleClose();
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    handleClose();
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel id="demo-simple-select-standard-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={value}
            fullWidth
            onChange={(e) => handlerColor(e)}
            label="Color">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"w"}>W</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="demo-simple-select-standard-label">Brand</InputLabel>

          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={brand}
            fullWidth
            onChange={(e) => handlerBrand(e)}
            label="Brand">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"w"}>W</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-required"
            fullWidth
            onChange={(e) => handlerPrice(e)}
            label="Price"
            value={price}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="demo-simple-select-standard-label">
            Sort Alphabetical
          </InputLabel>

          <Checkbox
            size="small"
            checked={sort}
            onChange={(e) => setSort(e.target.checked)}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="demo-simple-select-standard-label">
            Sort Alphabetical
          </InputLabel>

          <Radio
            checked={selectedValue === "-1"}
            onChange={handleChange}
            value="-1"
            name="radio-buttons"
            label="New"
            inputProps={{ "aria-label": "New" }}
          />
          <Radio
            checked={selectedValue === "1"}
            onChange={handleChange}
            value="1"
            label="Old"
            name="radio-buttons"
            inputProps={{ "aria-label": "Old" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FilterComponentItem;
