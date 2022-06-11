import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useColorForm } from "../../../hooks/components/color/form/useColorForm";
import ColorFormItems from "./items/ColorFormItems";

const ColorForm = ({ open, handleClose }) => {
  const { formik } = useColorForm();
  const buttonStyle = {
    margin: "8px 0",
  };
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle>Add Color</DialogTitle>
      <DialogContent>
        <ColorFormItems formik={formik} />
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

export default ColorForm;
