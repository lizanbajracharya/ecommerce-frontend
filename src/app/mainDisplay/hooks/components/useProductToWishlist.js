import {
  useAddProductToWishList,
  useRemoveProductFromWishList,
} from "../api/useProduct";

export const useProductToWishlist = () => {
  const { mutate } = useAddProductToWishList({});
  const { mutate: removeMutate } = useRemoveProductFromWishList({});
  const handleAdd = (id) => {
    mutate(id);
  };

  const handleRemove = (id) => {
    removeMutate(id);
  };

  return {
    handleAdd,
    handleRemove,
  };
};
