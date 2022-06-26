import { useGetUserAdmin } from "../../../api/user/useUserAdmin";

export const useUserTable = () => {
  const { data, isLoading, isError } = useGetUserAdmin();

  const filterData = data?.data.filter((d) => d?.isAdmin === true);
  const filterDataUser = data?.data.filter((d) => d?.isAdmin !== true);
  const columns = [
    {
      title: "ID",
      field: "_id",
    },
    {
      title: "Name",
      field: "name",
    },

    {
      title: "Email",
      field: "email",
    },
    {
      title: "Is Admin",
      field: "isAdmin",
    },
  ];
  return {
    columns,
    filterData,
    isLoading,
    isError,
    filterDataUser,
  };
};
