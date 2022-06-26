import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import { useUserUpdate } from "../../hooks/components/useUserUpdate";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const UpdatePasswordForm = ({ open, handleClose, data }) => {
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
  } = useUserUpdate(data);
  const buttonStyle = {
    margin: "8px 0",
  };

  return (
    <div>
      <Dialog open={open} onClose={() => handleClose()} maxWidth={"xl"}>
        <DialogTitle>Edit Password</DialogTitle>
        <DialogContent>
          <TextField
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            fullWidth
            id="name"
            margin="normal"
            name="name"
            style={{ display: "none" }}
          />
          <TextField
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
            id="email"
            margin="normal"
            name="email"
            style={{ display: "none" }}
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
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            id="submitButton"
            color="primary"
            style={buttonStyle}
            onClick={() => {
              formik.submitForm();
              handleClose();
            }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdatePasswordForm;
