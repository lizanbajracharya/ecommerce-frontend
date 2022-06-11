import { useFormik } from "formik";
import { useCreateBrand, useDeleteBrand } from "../../../api/brand/useBrand";
import { brandSchema } from "./brandValidationSchema";

export const useBrandForm = () => {
  const { mutate } = useCreateBrand({});
  const { mutate: deleteMutate } = useDeleteBrand({});
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
    },
    validationSchema: brandSchema,
    onSubmit: (values, { resetForm }) => {
      handleCreate(values);
      resetForm();
    },
  });

  const handleCreate = (values) => {
    mutate(values);
  };

  const handleDelete = (id) => {
    deleteMutate(id);
  };

  return {
    formik,
    handleDelete,
  };
};
