import { Grid, TextField } from "@mui/material";
import React from "react";

const ColorFormItems = ({ formik }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            type={"color"}
            fullWidth
            name="code"
            label="Color Code"
            id="code"
            value={formik.values.code}
            onChange={formik.handleChange}
            error={formik.touched.code && Boolean(formik.errors.code)}
            helperText={formik.touched.code && formik.errors.code}
            autoComplete="current-code"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ColorFormItems;
