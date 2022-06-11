import * as Yup from "yup";

const brandSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  type: Yup.string().required("Required"),
});

export { brandSchema };
