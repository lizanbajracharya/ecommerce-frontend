import * as Yup from "yup";

const colorSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  code: Yup.string().required("Required"),
});

export { colorSchema };
