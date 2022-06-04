import { useFormik } from "formik";
import { useCreateUser } from "../../../api/user/useUserAdmin";
import { userSchema } from "./userValidationSchema";

export const useUserForm = () => {
  const { mutate } = useCreateUser({});
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values, { resetForm }) => {
      handleCreate(values);
      resetForm();
    },
  });

  const handleCreate = (values) => {
    const formData = {
      ...values,
      isAdmin: true,
    };
    mutate(formData);
  };

  return {
    formik,
  };
};
