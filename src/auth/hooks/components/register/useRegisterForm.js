import { useRegister } from "../../api/register";
import { useFormik } from "formik";
import { registerSchema } from "./registerValidationSchema";
import { useState } from "react";

export const useRegisterForm = () => {
  const { mutate } = useRegister({});
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [validation, setValidation] = useState("");

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleShowConfirmPassword = () => {
    if (showConfirmPassword) {
      setShowConfirmPassword(false);
    } else {
      setShowConfirmPassword(true);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirm(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    if (password === confirm) {
      const formData = {
        ...values,
        password: password,
      };
      mutate(formData);
    } else {
      setValidation("Password does not match");
    }
  };
  return {
    formik,
    confirm,
    password,
    handleShowPassword,
    handleConfirmPassword,
    handlePassword,
    handleShowConfirmPassword,
    validation,
    showPassword,
    showConfirmPassword,
  };
};
