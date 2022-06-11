import { useGetColor } from "../../../api/color/useGetColor";

export const useColorTable = () => {
  const { data, isLoading, isError } = useGetColor();
  const columns = [
    {
      title: "ID",
      field: "_id",
    },

    {
      title: "Color",
      field: "name",
    },

    {
      title: "Color Code",
      field: "code",
    },
  ];
  return {
    columns,
    data,
    isLoading,
    isError,
  };
};
