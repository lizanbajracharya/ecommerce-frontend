import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("Not a proper email"),
  name: Yup.string().required("Required"),
});

export { registerSchema };
