import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useBrandForm } from "../../../hooks/components/brand/form/useBrandForm";
import BrandFormItem from "./items/BrandFormItem";

const BrandForm = ({ open, handleClose }) => {
  const { formik } = useBrandForm();
  const buttonStyle = {
    margin: "8px 0",
  };
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle>Add Brand</DialogTitle>
      <DialogContent>
        <BrandFormItem formik={formik} />
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

export default BrandForm;
