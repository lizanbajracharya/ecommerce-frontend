import * as Yup from "yup";

const userProfileSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().required("Required").email("Not a proper email"),
});
export { userProfileSchema };
