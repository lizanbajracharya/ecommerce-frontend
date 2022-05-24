import * as Yup from "yup";

const productSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  brand: Yup.string().required("Required"),
  color: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.string().required("Required"),
  countInStock: Yup.string().required("Required"),
});

export { productSchema };
