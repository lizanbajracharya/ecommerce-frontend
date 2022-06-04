import { useLogin } from "../../api/login";
import { useFormik } from "formik";
import { loginSchema } from "./loginValidationSchema";

export const useLoginForm = () => {
  const { mutate } = useLogin({});

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = (values) => {
    mutate(values);
  };
  return {
    formik,
  };
};
