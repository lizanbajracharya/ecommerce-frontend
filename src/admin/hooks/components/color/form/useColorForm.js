import { useFormik } from "formik";
import { useCreateColor, useDeleteColor } from "../../../api/color/useGetColor";
import { colorSchema } from "./colorValidationSchema";

export const useColorForm = () => {
  const { mutate } = useCreateColor({});
  const { mutate: deleteMutate } = useDeleteColor({});
  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
    },
    validationSchema: colorSchema,
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
