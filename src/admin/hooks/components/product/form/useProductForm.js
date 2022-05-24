import { useFormik } from "formik";
import { usePostProduct } from "../../../api/product/useProductAdmin";
import { productSchema } from "./productValidationSchema";

export const useProductForm = () => {
  const { mutate } = usePostProduct({});

  const formik = useFormik({
    initialValues: {
      name: "",
      brand: "",
      color: "",
      image: "",
      description: "",
      price: "",
      countInStock: "",
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      handleCreate(values);
    },
  });

  const handleCreate = (values) => {
    mutate(values);
  };

  return {
    formik,
  };
};
