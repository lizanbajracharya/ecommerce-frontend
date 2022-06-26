import { formatPrice } from "../../../../../utils/helpers";
import { useGetUserOrder } from "../../api/useOrderApi";

export const useOrderListTable = () => {
  const { data, isLoading, isError } = useGetUserOrder();

  const columns = [
    {
      title: "Id",
      field: "Id",
      render: (rowData) => <>{rowData?._id}</>,
    },
    {
      title: "Payment Method",
      field: "paymentMethod",
    },

    {
      title: "Tax Price",
      field: "taxPrice",
      render: (rowData) => <span>{formatPrice(rowData?.taxPrice)}</span>,
    },
    {
      title: "Shipping Price",
      field: "shippingPrice",
      render: (rowData) => <span>{formatPrice(rowData?.shippingPrice)}</span>,
    },
    {
      title: "Total Price",
      field: "totalPrice",
      render: (rowData) => <span>{formatPrice(rowData?.totalPrice)}</span>,
    },
    {
      title: "Is Paid",
      field: "isPaid",
      render: (rowData) => <span>{rowData?.isPaid ? "True" : "False"}</span>,
    },
    {
      title: "Is Delivered",
      field: "isDelivered",
      render: (rowData) => (
        <span>{rowData?.isDelivered ? "True" : "False"}</span>
      ),
    },
  ];
  return {
    data,
    isLoading,
    isError,
    columns,
  };
};
