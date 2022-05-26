import { useQuery } from "react-query";
import {
  getProductFeatured,
  getProducts,
  getProductById,
  getProductByAphabetical,
  getProductByNewAndOld,
  getProductByPrice,
  getProductByBrand,
  getProductByColor,
} from "../../api/product";

export const useGetProducts = () => {
  return useQuery(["getProductFeatured"], () => getProductFeatured());
};

export const useGetAllProducts = () => {
  return useQuery(["getProducts"], () => getProducts());
};

export const useGetProductById = (id) => {
  return useQuery(["getProductById"], () => getProductById(id));
};

export const useGetProductByAlphabetical = (alpha) => {
  return useQuery(["getProductByAlphabetical"], () =>
    getProductByAphabetical(alpha)
  );
};

export const useGetProductByNewAndOld = (asc) => {
  return useQuery(["getProductByNewAndOld"], () => getProductByNewAndOld(asc));
};

export const useGetProductByPrice = (price) => {
  return useQuery(["getProductByPrice"], () => getProductByPrice(price));
};

export const useGetProductByBrand = (brand) => {
  return useQuery(["getProductByBrand"], () => getProductByBrand(brand));
};

export const useGetProductByColor = (color) => {
  return useQuery(["getProductByColor"], () => getProductByColor(color));
};
