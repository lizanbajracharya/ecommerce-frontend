import * as Yup from "yup";

const shippingSchema = Yup.object().shape({
  address: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  postalCode: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});
export { shippingSchema };
