import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../axiosInterceptor";
import FilterComponentItem from "./item/FilterComponentItem";

const FilterComponent = ({ open, handleClose }) => {
  const [color, setColor] = useState();
  const [brand, setBrand] = useState();
  const [price, setPrice] = useState();
  const [sort, setSort] = useState();

  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    async function getProducts() {
      if (color) {
        const { products } = await axiosInstance.get(
          `/api/products/colored?color=${color}`
        );
        localStorage.setItem("productData", JSON.stringify(products));
      } else if (brand) {
        const { products } = await axiosInstance.get(
          `/api/products/branded?brand=${brand}`
        );
        localStorage.setItem("productData", JSON.stringify(products));
      } else if (price) {
        const { products } = await axiosInstance.get(
          `/api/products/priced?price=${price}`
        );
        localStorage.setItem("productData", JSON.stringify(products));
      } else if (sort) {
        const { products } = await axiosInstance.get(`/api/products/sorted`);
        localStorage.setItem("productData", JSON.stringify(products));
      } else if (selectedValue) {
        const { products } = await axiosInstance.get(
          `/api/products/filter?asc=${selectedValue}`
        );
        localStorage.setItem("productData", JSON.stringify(products));
      }
    }
    getProducts();
  }, [color, brand, price, sort, selectedValue]);
  return (
    <div>
      <Dialog open={open} maxWidth="500" onClose={() => handleClose()}>
        <DialogTitle>Filter</DialogTitle>
        <DialogContent>
          <FilterComponentItem
            setValue={setColor}
            setBrand={setBrand}
            setPrice={setPrice}
            value={color}
            brand={brand}
            price={price}
            handleClose={handleClose}
            setSort={setSort}
            sort={sort}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FilterComponent;
