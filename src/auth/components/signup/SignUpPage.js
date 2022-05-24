import { Button, TextField } from "@mui/material";
import React from "react";
import { useRegisterForm } from "../../hooks/components/register/useRegisterForm";

const SignUpPage = () => {
  const { formik } = useRegisterForm();
  return (
    <div>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
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
        id="email"
        label="Email Address"
        name="email"
        autoFocus
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        autoComplete="current-password"
      />
      <Button
        onClick={() => formik.submitForm()}
        type="submit"
        id="submitButton"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
    </div>
  );
};

export default SignUpPage;
