import { axiosInstance } from "../../../axiosInterceptor";

export const getProductFeatured = async () => {
  const response = await axiosInstance.get("/api/products/featured");
  return response;
};

export const getProducts = async () => {
  const response = await axiosInstance.get(`/api/products`);

  return response;
};
