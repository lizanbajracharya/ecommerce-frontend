import { TextField } from "@mui/material";
import React from "react";

const ProductFormItem = ({ formik }) => {
  return (
    <div>
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
      <TextField
        margin="normal"
        required
        fullWidth
        name="image"
        label="image"
        id="image"
        value={formik.values.image}
        onChange={formik.handleChange}
        error={formik.touched.image && Boolean(formik.errors.image)}
        helperText={formik.touched.image && formik.errors.image}
        autoComplete="current-image"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="brand"
        label="brand"
        name="brand"
        autoComplete="brand"
        autoFocus
        value={formik.values.brand}
        onChange={formik.handleChange}
        error={formik.touched.brand && Boolean(formik.errors.brand)}
        helperText={formik.touched.brand && formik.errors.brand}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="color"
        label="color"
        id="color"
        value={formik.values.color}
        onChange={formik.handleChange}
        error={formik.touched.color && Boolean(formik.errors.color)}
        helperText={formik.touched.color && formik.errors.color}
        autoComplete="current-color"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="description"
        label="description"
        name="description"
        autoComplete="description"
        autoFocus
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="price"
        label="price"
        id="price"
        value={formik.values.price}
        onChange={formik.handleChange}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
        autoComplete="current-price"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="countInStock"
        label="countInStock"
        id="countInStock"
        value={formik.values.countInStock}
        onChange={formik.handleChange}
        error={
          formik.touched.countInStock && Boolean(formik.errors.countInStock)
        }
        helperText={formik.touched.countInStock && formik.errors.countInStock}
        autoComplete="current-countInStock"
      />
    </div>
  );
};

export default ProductFormItem;
