import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { createColors, deleteColor, getColors } from "../../../api/color";

export const useGetColor = () => {
  return useQuery(["getColors"], () => getColors(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useCreateColor = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["createColor"], (formData) => createColors(formData), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getColors"]);
      toast.success("Succesfully added color");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useDeleteColor = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["deleteColor"], (id) => deleteColor(id), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getColors"]);
      toast.success("Succesfully deleted color");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
