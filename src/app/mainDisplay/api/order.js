import { axiosInstance } from "../../../axiosInterceptor";

export const getOrder = () => {
  const response = axiosInstance.get(`/api/orders/myorders`);
  return response;
};

export const getOrderById = (id) => {
  const response = axiosInstance.get(`/api/orders/${id}`);
  return response;
};

export const createOrder = (formData) => {
  const response = axiosInstance.post(`/api/orders`, formData);
  return response;
};

export const orderPay = (formData) => {
  const response = axiosInstance.put(
    `/api/orders/${formData?.orderId}/pay`,
    formData?.paymentResult
  );
  return response;
};
