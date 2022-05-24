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
