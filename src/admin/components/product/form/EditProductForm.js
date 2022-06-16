import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useProductEditForm } from "../../../hooks/components/product/form/useProductEditForm";
import { useProductForm } from "../../../hooks/components/product/form/useProductForm";
import ProductFormItem from "./item/ProductFormItem";

const EditProductForm = ({ data, open, handleClose }) => {
  const { colorList, brandList } = useProductForm();
  const { formik, setImage, setColor, color, image } = useProductEditForm(data);
  const buttonStyle = {
    margin: "8px 0",
  };
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent>
        <ProductFormItem
          formik={formik}
          setImage={setImage}
          colorList={colorList}
          brandList={brandList}
          setColor={setColor}
          color={color}
          image={image}
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
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductForm;
