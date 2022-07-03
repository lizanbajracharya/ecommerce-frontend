import { useCreateOrder, useOrderPay } from "../../api/useOrderApi";

export const useOrder = () => {
  const { mutate } = useCreateOrder({});
  const { mutate: payMutate } = useOrderPay({});

  const handleSubmit = (values) => {
    mutate(values);
  };

  const handleToPay = (values) => {
    console.log(values);
    payMutate(values);
  };
  return {
    handleSubmit,
    handleToPay,
  };
};
