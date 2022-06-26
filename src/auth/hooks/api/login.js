import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { login } from "../../api/login";

export const useLogin = ({ onSuccess }) => {
  return useMutation(["login"], (userData) => login(userData), {
    onSuccess: (data, variables, context) => {
      toast.success("Login Successful");
      localStorage.setItem("loginInfo", JSON.stringify(data));

      if (data?.isAdmin) {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }

      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(err.response.data.message);
    },
  });
};
