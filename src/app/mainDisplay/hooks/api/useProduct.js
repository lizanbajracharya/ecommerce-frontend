import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  getProductFeatured,
  getProducts,
  getProductById,
  getProductByAphabetical,
  getProductByNewAndOld,
  getProductByPrice,
  getProductByBrand,
  getProductByColor,
  addProductToWishlist,
  removeProductFromWishlist,
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

export const useAddProductToWishList = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addProductToWishlist"],
    (id) => addProductToWishlist(id),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(["product"]);
        toast.success("Succesfully Added Product To WishList");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`error: ${err.message}`);
      },
    }
  );
};

export const useRemoveProductFromWishList = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["removeProductFromWishlist"],
    (id) => removeProductFromWishlist(id),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(["product"]);
        toast.success("Succesfully Removed Product To WishList");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`error: ${err.message}`);
      },
    }
  );
};
