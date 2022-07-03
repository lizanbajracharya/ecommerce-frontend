import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  getOrderItemById,
  getOrderList,
  markDeliver,
} from "../../../api/order";

export const useGetOrderList = () => {
  return useQuery(["getOrderList"], () => getOrderList(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetOrderItemById = (id) => {
  return useQuery(["getOrderItemById"], () => getOrderItemById(id), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useMarkDeliverOrder = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["markDeliver"], (id) => markDeliver(id), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getOrderList"]);
      queryClient.invalidateQueries(["getOrderItemById"]);
      toast.success("Succesfully marked product as deliverd");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
