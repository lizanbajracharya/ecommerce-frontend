import { InputLabel, TextField, MenuItem, Grid } from "@mui/material";
import axios from "axios";
import React from "react";

const colorMap = [
  { value: "red", label: "Red" },
  { value: "white", label: "White" },
  { value: "green", label: "Green" },
  { value: "grey", label: "Grey" },
];
const brandMap = [
  { value: "samsung", label: "Samsung" },
  { value: "apple", label: "Apple" },
  { value: "google", label: "Google" },
  { value: "sony", label: "Sony" },
  { value: "microsoft", label: "Microsoft" },
  { value: "nokia", label: "Nokia" },
  { value: "oneplus", label: "OnePlus" },
];

const ProductFormItem = ({ formik, setImage }) => {
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
            autoFocus
            value={formik.values.brand}
            onChange={formik.handleChange}
            error={formik.touched.brand && Boolean(formik.errors.brand)}
            helperText={formik.touched.brand && formik.errors.brand}>
            {brandMap.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            select
            fullWidth
            name="color"
            label="Color"
            id="color"
            value={formik.values.color}
            onChange={formik.handleChange}
            error={formik.touched.color && Boolean(formik.errors.color)}
            helperText={formik.touched.color && formik.errors.color}
            autoComplete="current-color">
            {colorMap.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
      <InputLabel id="demo-simple-select-standard-label">Image</InputLabel>
      <TextField
        margin="normal"
        required
        fullWidth
        id="image"
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
        autoFocus
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
    </div>
  );
};

export default ProductFormItem;
