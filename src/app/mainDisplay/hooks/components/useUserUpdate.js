import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useUpdateUserProfile } from "../api/useUser";
import { userProfileSchema } from "./userValidationSchema";

export const useUserUpdate = (data) => {
  const { mutate } = useUpdateUserProfile({});
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [validation, setValidation] = useState("");

  useEffect(() => {
    setImage(data && data?.image);
  }, [data]);

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

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
  };
  const formik = useFormik({
    initialValues: {
      name: data?.name,
      email: data?.email,
      address: data?.address,
      country: data?.country,
      city: data?.city,
      phone: data?.phone,
    },
    enableReinitialize: true,
    validationSchema: userProfileSchema,
    onSubmit: (values, { resetForm }) => {
      handleUpdate(values);
      resetForm();
      setEdit(false);
    },
  });

  const handleUpdate = (values) => {
    if (password) {
      if (password === confirm) {
        const formData = {
          ...values,
          image: image,
          password: password,
        };
        mutate(formData);
      } else {
        setValidation("Password does not match");
      }
    } else {
      const formData = {
        ...values,
        image: image,
      };
      mutate(formData);
    }
  };

  return {
    formik,
    edit,
    handleEdit,
    handleCancel,
    confirm,
    password,
    handleShowPassword,
    handleConfirmPassword,
    handlePassword,
    handleShowConfirmPassword,
    validation,
    showPassword,
    showConfirmPassword,
    setImage,
  };
};
