import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { shippingSchema } from "./shippingValidationSchema";

export const useShippingForm = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      address: "",
      postalCode: "",
      city: "",
      country: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values, { resetForm }) => {
      handleCreate(values);
      resetForm();
    },
  });

  const handleCreate = (values) => {
    localStorage.setItem("shippingDetail", JSON.stringify(values));
    history.push("/payment");
  };
  return {
    formik,
  };
};
