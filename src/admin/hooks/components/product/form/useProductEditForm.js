import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useUpdateProduct } from "../../../api/product/useProductAdmin";
import { productSchema } from "./productValidationSchema";

export const useProductEditForm = (data) => {
  const { mutate } = useUpdateProduct({});
  const [image, setImage] = useState();
  const [color, setColor] = useState([]);

  useEffect(() => {
    setImage(data && data?.image);
    setColor(data && data?.color.map((p) => p?._id));
  }, [data]);

  const formik = useFormik({
    initialValues: {
      name: data && data?.name,
      brand: data && data?.brand?._id,
      description: data && data?.description,
      price: data && data?.price,
      countInStock: data && data?.countInStock,
    },
    validationSchema: productSchema,
    enableReinitialize: true,

    onSubmit: (values, { resetForm }) => {
      handleCreate(values);
      resetForm();
    },
  });

  const handleCreate = (values) => {
    const formData = {
      ...values,
      image: image,
      color: color,
      id: data?._id,
    };
    mutate(formData);
  };

  return {
    formik,
    setImage,
    setColor,
    color,
    image,
  };
};
