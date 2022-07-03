import { axiosInstance } from "../../axiosInterceptor";

export const getOrderList = async () => {
  const response = await axiosInstance.get(`/api/orders`);
  return response;
};

export const getOrderItemById = async (id) => {
  const response = await axiosInstance.get(`/api/orders/${id}`);
  return response;
};

export const markDeliver = async (id) => {
  const response = await axiosInstance.put(`/api/orders/${id}/deliver`);
  return response;
};
