import { axiosInstance } from "../../axiosInterceptor";

export const getBrands = async () => {
  const { data } = await axiosInstance.get("/api/brands");
  return data;
};

export const createBrands = async (formData) => {
  const { data } = await axiosInstance.post(`/api/brands`, formData);
  return data;
};

export const deleteBrand = async (id) => {
  const { data } = await axiosInstance.delete(`/api/brands/${id}`);
  return data;
};
