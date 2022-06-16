import axios from "axios";
import { axiosInstance } from "../../axiosInterceptor";

export const getProductAdmin = async () => {
  const { data } = await axios.get("/api/products");

  return data;
};

export const createProduct = async (formData) => {
  const { data } = await axiosInstance.post("/api/products", formData);
  return data;
};

export const updateProduct = async (formData) => {
  const { data } = await axiosInstance.put(
    `/api/products/${formData?.id}`,
    formData
  );
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await axiosInstance.delete(`/api/products/${id}`);
  return data;
};
