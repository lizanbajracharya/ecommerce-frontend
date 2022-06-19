import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../api/register";

export const useRegister = ({ onSuccess }) => {
  const history = useHistory();
  return useMutation(["register"], (userData) => register(userData), {
    onSuccess: (data, variables, context) => {
      toast.success("Register Successful");
      localStorage.setItem("loginInfo", JSON.stringify(data));

      if (data?.isAdmin) {
        history.push(`/admin`);
      } else {
        history.push(`/`);
      }

      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(err.response.data.message);
    },
  });
};
