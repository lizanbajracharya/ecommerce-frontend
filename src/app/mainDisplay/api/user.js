import { axiosInstance } from "../../../axiosInterceptor";

export const getUserProfile = async () => {
  const response = await axiosInstance.get(`/api/users/profile`);
  return response;
};

export const updateProfile = async (formData) => {
  const response = await axiosInstance.put(`/api/users/profile`, formData);
  return response;
};
