import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { getUserProfile, updateProfile } from "../../api/user";

export const useGetUserProfile = () => {
  return useQuery(["getUserProfile"], () => getUserProfile(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useUpdateUserProfile = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["updateUserProfile"],
    (formData) => updateProfile(formData),
    {
      onSuccess: (data, variables, context) => {
        queryClient?.invalidateQueries(["getUserProfile"]);
        toast.success("Succesfully Updated User");
        localStorage.setItem("loginInfo", JSON.stringify(data));

        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`error: ${err.message}`);
      },
    }
  );
};
