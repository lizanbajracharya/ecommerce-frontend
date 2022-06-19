import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { createBrands, deleteBrand, getBrands } from "../../../api/brand";

export const useGetBrand = () => {
  return useQuery(["getBrand"], () => getBrands(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useCreateBrand = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["createBrand"], (formData) => createBrands(formData), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getBrand"]);
      toast.success("Succesfully added brand");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useDeleteBrand = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["deleteBrand"], (id) => deleteBrand(id), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getBrand"]);
      toast.success("Succesfully deleted brand");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
