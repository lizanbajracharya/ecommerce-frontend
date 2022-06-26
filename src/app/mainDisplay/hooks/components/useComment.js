import { useState } from "react";
import { useFormik } from "formik";
import { commentSchema } from "./commentValidationSchema";
import { usePostComment } from "../api/useProduct";
import { useParams } from "react-router-dom";

export const useComment = () => {
  const [value, setValue] = useState(0);
  const { id } = useParams();
  const { mutate } = usePostComment({});
  const handleStar = (star) => {
    setValue(star);
  };

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: commentSchema,
    onSubmit: (values, { resetForm }) => {
      handleCreate(values);
      resetForm();
      setValue(0);
    },
  });

  const handleCreate = (values) => {
    const formData = {
      ...values,
      rating: value,
      id: id,
    };
    mutate(formData);
  };
  return {
    formik,
    handleStar,
    value,
  };
};
