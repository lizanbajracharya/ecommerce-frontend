import { useGetBrand } from "../../../api/brand/useBrand";

export const useBrandTable = () => {
  const { data, isLoading, isError } = useGetBrand();
  const columns = [
    {
      title: "ID",
      field: "_id",
    },

    {
      title: "Brand",
      field: "name",
    },

    {
      title: "Type",
      field: "type",
    },
  ];
  return {
    columns,
    data,
    isLoading,
    isError,
  };
};
