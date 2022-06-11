import * as Yup from "yup";

const userSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Not a proper email"),
  password: Yup.string().required("Required"),
});

export { userSchema };
