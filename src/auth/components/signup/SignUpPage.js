import {
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import { useRegisterForm } from "../../hooks/components/register/useRegisterForm";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const SignUpPage = () => {
  const {
    formik,
    confirm,
    password,
    handleShowPassword,
    handleConfirmPassword,
    handlePassword,
    handleShowConfirmPassword,
    validation,
    showPassword,
    showConfirmPassword,
  } = useRegisterForm();
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
        onBlur={formik.handleBlur}
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
        value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      {validation && <span style={{ color: "red" }}>{validation}</span>}
      <InputLabel htmlFor="password">Password *</InputLabel>
      <OutlinedInput
        name="password"
        label="Password"
        id="password"
        required
        type={showPassword ? "text" : "password"}
        value={password}
        fullWidth
        onChange={handlePassword}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              onMouseDown={handleShowPassword}
              edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <InputLabel htmlFor="confirmPassword">Confirm Password *</InputLabel>
      <OutlinedInput
        name="confirmPassword"
        label="Confirm Password"
        id="confirmPassword"
        required
        type={showConfirmPassword ? "text" : "password"}
        value={confirm}
        fullWidth
        onChange={handleConfirmPassword}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowConfirmPassword}
              onMouseDown={handleShowConfirmPassword}
              edge="end">
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
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
