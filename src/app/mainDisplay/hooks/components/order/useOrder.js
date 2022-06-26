import { useCreateOrder } from "../../api/useOrderApi";

export const useOrder = () => {
  const { mutate } = useCreateOrder({});

  const handleSubmit = (values) => {
    mutate(values);
  };
  return {
    handleSubmit,
  };
};
