import * as Yup from "yup";

const commentSchema = Yup.object().shape({
  comment: Yup.string(),
});
export { commentSchema };
