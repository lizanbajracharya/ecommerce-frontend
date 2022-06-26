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
  getProductByWishlist,
  postComment,
  updateComment,
  deleteComment,
} from "../../api/product";

export const useGetProducts = () => {
  return useQuery(["getProductFeatured"], () => getProductFeatured(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetAllProducts = () => {
  return useQuery(["getProducts"], () => getProducts(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetWishlistProduct = () => {
  return useQuery(["getWishListProducts"], () => getProductByWishlist(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetProductById = (id) => {
  return useQuery(["getProductById"], () => getProductById(id), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetProductByAlphabetical = (alpha) => {
  return useQuery(
    ["getProductByAlphabetical"],
    () => getProductByAphabetical(alpha),
    {
      cacheTime: 0,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
};

export const useGetProductByNewAndOld = (asc) => {
  return useQuery(["getProductByNewAndOld"], () => getProductByNewAndOld(asc), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetProductByPrice = (price) => {
  return useQuery(["getProductByPrice"], () => getProductByPrice(price), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetProductByBrand = (brand) => {
  return useQuery(["getProductByBrand"], () => getProductByBrand(brand), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetProductByColor = (color) => {
  return useQuery(["getProductByColor"], () => getProductByColor(color), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useAddProductToWishList = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addProductToWishlist"],
    (id) => addProductToWishlist(id),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(["product"]);
        queryClient.invalidateQueries(["getProductById"]);
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
        queryClient.invalidateQueries(["getProductById"]);
        queryClient.invalidateQueries(["getWishListProducts"]);

        toast.success("Succesfully Removed Product From WishList");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`error: ${err.message}`);
      },
    }
  );
};

export const usePostComment = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["postComment"], (formData) => postComment(formData), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["product"]);
      queryClient.invalidateQueries(["getProductById"]);

      toast.success("Succesfully Added A Comment");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useUpdateComment = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["updateComment"], (formData) => updateComment(formData), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["product"]);
      queryClient.invalidateQueries(["getProductById"]);

      toast.success("Succesfully update your comment");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useDeleteComment = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["deleteComment"], (id) => deleteComment(id), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["product"]);
      queryClient.invalidateQueries(["getProductById"]);

      toast.success("Succesfully Removed Your Comment");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
