import { useGetProductAdmin } from "../../../api/product/useProductAdmin";

export const useProductTable = () => {
  const { data, isLoading, isError } = useGetProductAdmin();
  console.log(data);
  const columns = [
    {
      title: "ID",
      field: "_id",
    },
    {
      title: "Product Name",
      field: "name",
    },
    {
      title: "Image",
      field: "image",
    },
    {
      title: "Brand",
      field: "brand",
    },
    {
      title: "Color",
      field: "color",
    },
    {
      title: "Description",
      field: "description",
    },
    {
      title: "Product In Stock",
      field: "countInStock",
    },
  ];
  return {
    columns,
    data,
    isLoading,
    isError,
  };
};
