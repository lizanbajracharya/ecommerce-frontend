import { InputLabel, TextField, MenuItem, Grid, Select } from "@mui/material";
import axios from "axios";
import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ProductFormItem = ({
  formik,
  setImage,
  brandList,
  colorList,
  setColor,
  color,
  image,
}) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setColor(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        proxy: {
          port: 3000,
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="price"
            label="Price"
            id="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
            autoComplete="current-price"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            select
            required
            fullWidth
            id="brand"
            label="Brand"
            name="brand"
            autoComplete="brand"
            value={formik.values.brand}
            onChange={formik.handleChange}
            error={formik.touched.brand && Boolean(formik.errors.brand)}
            helperText={formik.touched.brand && formik.errors.brand}>
            {brandList?.length > 0 ? (
              brandList.map((option) => (
                <MenuItem key={option.key} value={option.value}>
                  {option.label}
                </MenuItem>
              ))
            ) : (
              <MenuItem>No brand available</MenuItem>
            )}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <InputLabel id="demo-multiple-name-label">Color</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            fullWidth
            value={color}
            onChange={handleChange}
            input={<OutlinedInput label="Color" />}
            MenuProps={MenuProps}>
            {colorList?.length > 0 ? (
              colorList.map((option) => (
                <MenuItem key={option.key} value={option.value}>
                  {option.label}
                </MenuItem>
              ))
            ) : (
              <MenuItem>No Color available</MenuItem>
            )}
          </Select>
        </Grid>
      </Grid>
      <TextField
        margin="normal"
        required
        fullWidth
        name="countInStock"
        label="Quantity"
        id="countInStock"
        value={formik.values.countInStock}
        onChange={formik.handleChange}
        error={
          formik.touched.countInStock && Boolean(formik.errors.countInStock)
        }
        helperText={formik.touched.countInStock && formik.errors.countInStock}
        autoComplete="current-countInStock"
      />
      <InputLabel id="demo-simple-select-standard-label">
        Image {image && `:${image}`}
      </InputLabel>
      <TextField
        margin="normal"
        required
        fullWidth
        id="image"
        // value={image}
        name="image"
        autoFocus
        type={"file"}
        onChange={uploadFileHandler}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        multiline
        rows={4}
        id="description"
        label="Description"
        name="description"
        autoComplete="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
    </div>
  );
};

export default ProductFormItem;
