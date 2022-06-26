import { useFormik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useUpdateComment } from "../api/useProduct";
import { commentSchema } from "./commentValidationSchema";

export const useCommentEdit = (data) => {
  const [value, setValue] = useState(Number(data?.rating));
  const { id } = useParams();
  const { mutate } = useUpdateComment({});
  const handleStar = (star) => {
    setValue(star);
  };

  const formik = useFormik({
    initialValues: {
      comment: data?.comment,
    },
    enableReinitialize: true,
    validationSchema: commentSchema,
    onSubmit: (values, { resetForm }) => {
      handleCreate(values);
      resetForm();
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
