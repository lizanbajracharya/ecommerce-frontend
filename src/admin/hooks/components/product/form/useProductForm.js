import { useFormik } from "formik";
import { useState } from "react";
import { useGetBrand } from "../../../api/brand/useBrand";
import { useGetColor } from "../../../api/color/useGetColor";
import {
  useDeleteProduct,
  usePostProduct,
} from "../../../api/product/useProductAdmin";
import { productSchema } from "./productValidationSchema";

export const useProductForm = () => {
  const { mutate } = usePostProduct({});
  const { mutate: deleteMutate } = useDeleteProduct({});
  const { data: colorData } = useGetColor();
  const { data: brandData } = useGetBrand();
  const [image, setImage] = useState();
  const [color, setColor] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      brand: "",
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
      color: color,
    };
    mutate(formData);
  };

  const brandList =
    brandData &&
    brandData.map((brand) => {
      return {
        key: brand._id,
        value: brand._id,
        label: brand.name,
      };
    });

  const colorList =
    colorData &&
    colorData.map((color) => {
      return {
        key: color._id,
        value: color._id,
        label: color.name,
      };
    });

  const handleDelete = (id) => {
    deleteMutate(id);
  };

  return {
    formik,
    setImage,
    brandList,
    colorList,
    setColor,
    color,
    handleDelete,
    image,
  };
};
