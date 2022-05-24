import { useQuery } from "react-query";
import { getProductFeatured, getProducts } from "../../api/product";

export const useGetProducts = () => {
  return useQuery(["getProductFeatured"], () => getProductFeatured());
};

export const useGetAllProducts = () => {
  return useQuery(["getProducts"], () => getProducts());
};
