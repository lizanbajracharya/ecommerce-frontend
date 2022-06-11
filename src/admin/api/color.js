import { axiosInstance } from "../../axiosInterceptor";

export const getColors = async () => {
  const { data } = await axiosInstance.get("/api/colors");
  return data;
};

export const createColors = async (formData) => {
  const { data } = await axiosInstance.post(`/api/colors`, formData);
  return data;
};

export const deleteColor = async (id) => {
  const { data } = await axiosInstance.delete(`/api/colors/${id}`);
  return data;
};
