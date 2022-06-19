import { Button, TextField } from "@mui/material";
import React from "react";
import { useLoginForm } from "../../hooks/components/login/useLoginForm";

const LoginPage = () => {
  const { formik } = useLoginForm();
  return (
    <div>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onBlur={formik.handleBlur}
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
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        autoComplete="current-password"
      />
      <Button
        onClick={() => formik.submitForm()}
        type="submit"
        id="loginButton"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </div>
  );
};

export default LoginPage;
