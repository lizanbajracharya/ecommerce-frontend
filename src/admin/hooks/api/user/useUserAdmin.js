import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { createUser, getUsers, updateUser } from "../../../api/user";

export const useGetUserAdmin = () => {
  return useQuery(["user"], () => getUsers(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useCreateUser = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["createUser"], (formData) => createUser(formData), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["user"]);
      toast.success("Succesfully created admin");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useUpdateUser = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["updateUser"],
    ({ formData, id }) => updateUser(formData, id),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(["user"]);
        toast.success("Succesfully updated user");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`error: ${err.message}`);
      },
    }
  );
};
