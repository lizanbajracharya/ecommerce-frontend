import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrder, getOrder, getOrderById, orderPay } from "../../api/order";

export const useGetUserOrder = () => {
  return useQuery(["getUserOrder"], () => getOrder(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetOrderById = (id) => {
  return useQuery(["getUserOrderById"], () => getOrderById(id), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useCreateOrder = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  const history = useHistory();
  return useMutation(["createOrder"], (formData) => createOrder(formData), {
    onSuccess: (data, variables, context) => {
      queryClient?.invalidateQueries(["getUserOrder"]);
      queryClient?.invalidateQueries(["getUserOrderById"]);
      toast.success("Successfully order products");
      history.push(`/order/${data?._id}`);
      localStorage.removeItem("cartItems");
      localStorage.removeItem("shippingDetail");
      localStorage.removeItem("paymentMethod");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.response.data.message}`);
    },
  });
};

export const useOrderPay = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["payOrder"], (formData) => orderPay(formData), {
    onSuccess: (data, variables, context) => {
      queryClient?.invalidateQueries(["getUserOrder"]);
      queryClient?.invalidateQueries(["getUserOrderById"]);
      toast.success("Successfully paid");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.response.data.message}`);
    },
  });
};
