import { axiosInstance } from "../../axiosInterceptor";

export const getUsers = async () => {
  const { data } = await axiosInstance.get(`/api/users`);
  return data;
};
export const createUser = async (formData) => {
  const { data } = await axiosInstance.post(`api/users/register`, formData);
  return data;
};
export const updateUser = async (formData, id) => {
  const { data } = await axiosInstance.put(`api/users/${id}`, formData);
  return data;
};
