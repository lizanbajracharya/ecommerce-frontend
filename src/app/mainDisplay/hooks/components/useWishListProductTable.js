import { useGetWishlistProduct } from "../api/useProduct";

export const useWishListProductTable = () => {
  const { data, isLoading, isError } = useGetWishlistProduct();

  const columns = [
    {
      title: "Image",
      field: "image",
      render: (rowData) => (
        <img
          src={rowData?.image}
          style={{ width: 100, borderRadius: "50%" }}
          alt="product iamge"
        />
      ),
    },
    {
      title: "Product Name",
      field: "name",
    },

    {
      title: "Brand",
      field: "brand",
      render: (rowData) => <span>{rowData?.brand?.name}</span>,
    },
    {
      title: "Color",
      field: "color",
      render: (rowData) => (
        <span>{rowData?.color.map((color) => color?.name + ",")}</span>
      ),
    },
    {
      title: "Description",
      field: "description",
    },
  ];
  return {
    data,
    columns,
    isLoading,
    isError,
  };
};
