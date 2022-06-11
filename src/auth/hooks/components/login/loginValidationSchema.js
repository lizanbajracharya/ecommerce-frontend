import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("Not a proper email"),
  password: Yup.string().required("Required"),
});

export { loginSchema };
