import { useEffect, useState } from "react";
import { axiosInstance } from "../../../../axiosInterceptor";

export const useSortAndFilter = (sort, filterType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setError(true);
    setLoading(true);
    async function fetchData() {
      if (sort === "new") {
        const response = await axiosInstance.get(`/api/products/filter?asc=-1`);
        setProduct(response && response?.products);
        setLoading(false);
        setError(false);
      } else if (sort === "old") {
        const response = await axiosInstance.get(`/api/products/filter?asc=1`);
        setProduct(response && response?.products);
        setLoading(false);
        setError(false);
      } else if (sort === "ascending") {
        const response = await axiosInstance.get(
          `/api/products/sorted?alpha=-1`
        );
        setProduct(response && response?.products);
        setLoading(false);
        setError(false);
      } else if (sort === "descending") {
        const response = await axiosInstance.get(
          `/api/products/sorted?alpha=1`
        );
        setProduct(response && response?.products);
        setLoading(false);
        setError(false);
      } else if (filterType === "search") {
        const response = await axiosInstance.get(
          `/api/products?keyword=${sort}`
        );
        setProduct(response && response?.products);
        setLoading(false);
        setError(false);
      } else if (filterType === "color") {
        const response = await axiosInstance.get(
          `/api/products/colored?color=${sort}`
        );
        setProduct(response && response?.products);
        setLoading(false);
        setError(false);
      } else if (filterType === "brand") {
        const response = await axiosInstance.get(
          `/api/products/branded?brand=${sort}`
        );
        setProduct(response && response?.products);
        setLoading(false);
        setError(false);
      } else if (filterType === "price") {
        const response = await axiosInstance.get(
          `/api/products/priced?price=${sort}`
        );
        setProduct(response && response?.products);
        setLoading(false);
        setError(false);
      } else {
        const response = await axiosInstance.get(`/api/products`);
        setProduct(response && response?.products);
        setLoading(false);
        setError(false);
      }
    }
    fetchData();
  }, [sort, filterType]);

  return { loading, error, product };
};
