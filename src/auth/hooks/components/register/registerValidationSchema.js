import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export { registerSchema };
