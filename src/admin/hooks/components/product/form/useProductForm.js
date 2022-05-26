import { useFormik } from "formik";
import { useState } from "react";
import { usePostProduct } from "../../../api/product/useProductAdmin";
import { productSchema } from "./productValidationSchema";

export const useProductForm = () => {
  const { mutate } = usePostProduct({});
  const [image, setImage] = useState();
  const formik = useFormik({
    initialValues: {
      name: "",
      brand: "",
      color: "",
      description: "",
      price: "",
      countInStock: "",
    },
    validationSchema: productSchema,
    onSubmit: (values, { resetForm }) => {
      handleCreate(values);
      resetForm();
    },
  });

  const handleCreate = (values) => {
    const formData = {
      ...values,
      image: image,
    };
    mutate(formData);
  };

  return {
    formik,
    setImage,
  };
};
