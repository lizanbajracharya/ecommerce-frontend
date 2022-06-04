import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useUserForm } from "../../../hooks/components/user/form/useUserForm";
import UserFormItem from "./items/UserFormItem";

const UserForm = ({ open, handleClose }) => {
  const { formik } = useUserForm();
  const buttonStyle = {
    margin: "8px 0",
  };
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle>Add Admin</DialogTitle>
      <DialogContent>
        <UserFormItem formik={formik} />
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          id="submitButton"
          color="primary"
          style={buttonStyle}
          disabled={!(formik.isValid && formik.dirty)}
          onClick={() => {
            formik.submitForm();
            handleClose();
          }}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserForm;
