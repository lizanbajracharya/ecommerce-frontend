import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  createProduct,
  deleteProduct,
  getProductAdmin,
  updateProduct,
} from "../../../api/product";

export const useGetProductAdmin = () => {
  return useQuery(["product"], () => getProductAdmin(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
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

export const useUpdateProduct = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["updateProduct"], (formData) => updateProduct(formData), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["product"]);
      toast.success("Succesfully updated product");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useDeleteProduct = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["deleteProduct"], (id) => deleteProduct(id), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["product"]);
      toast.success("Succesfully deleted product");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
