import { useRegister } from "../../api/register";
import { useFormik } from "formik";
import { registerSchema } from "./registerValidationSchema";

export const useRegisterForm = () => {
  const { mutate } = useRegister({});

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    console.log(values);
    mutate(values);
  };
  return {
    formik,
  };
};
