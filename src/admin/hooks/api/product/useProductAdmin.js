import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { createProduct, getProductAdmin } from "../../../api/product";

export const useGetProductAdmin = () => {
  return useQuery(["product"], () => getProductAdmin());
};

export const usePostProduct = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["addProduct"], (formData) => createProduct(formData), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["product"]);
      toast.success("Succesfully added product");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
