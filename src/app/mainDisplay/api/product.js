import { axiosInstance } from "../../../axiosInterceptor";

export const getProductFeatured = async () => {
  const response = await axiosInstance.get("/api/products/featured");
  return response;
};

export const getProducts = async () => {
  const response = await axiosInstance.get(`/api/products`);

  return response;
};

export const getProductById = async (id) => {
  const response = await axiosInstance.get(`/api/products/${id}`);
  return response;
};

export const getProductByAphabetical = async (alpha) => {
  const response = await axiosInstance.get(
    `/api/products/sorted?alpha=${alpha}`
  );
  return response;
};

export const getProductByNewAndOld = async (asc) => {
  const response = await axiosInstance.get(`/api/products/filter?asc=${asc}`);
  return response;
};

export const getProductByPrice = async (price) => {
  const reponse = await axiosInstance.get(
    `/api/products/priced?price=${price}`
  );
  return reponse;
};

export const getProductByBrand = async (brand) => {
  const reponse = await axiosInstance.get(
    `/api/products/branded?brand=${brand}`
  );
  return reponse;
};

export const getProductByColor = async (color) => {
  const response = await axiosInstance.get(
    `/api/products/colored?color=${color}`
  );
  return response;
};

export const addProductToWishlist = async (productid) => {
  const response = await axiosInstance.post(
    `/api/products/${productid}/wishlist`
  );
  return response;
};

export const removeProductFromWishlist = async (productid) => {
  const response = await axiosInstance.post(
    `/api/products/${productid}/remove`
  );
  return response;
};

export const getProductByWishlist = async () => {
  const response = await axiosInstance.get(`/api/products/wishlist`);
  return response;
};

export const postComment = async (formData) => {
  const response = await axiosInstance.post(
    `/api/products/${formData?.id}/reviews`,
    formData
  );
  return response;
};

export const updateComment = async (formData) => {
  const response = await axiosInstance.put(
    `/api/products/${formData?.id}/reviews`,
    formData
  );
  return response;
};

export const deleteComment = async (id) => {
  const response = await axiosInstance.delete(`/api/products/${id}/reviews`);
  return response;
};
