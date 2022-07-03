import { useMarkDeliverOrder } from "../../../api/order/useOrder";

export const useOrderForm = () => {
  const { mutate } = useMarkDeliverOrder({});

  const handleMarkDeliver = (id) => {
    mutate(id);
  };
  return {
    handleMarkDeliver,
  };
};
