import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AmountButtons from "./AmountButtons";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
  // add to cart
  const { countInStock: stock, color } = product;
  const [amount, setAmount] = useState(1);
  const [mainColor, setMainColor] = useState(color[0]?.code);

  const handleAddToCart = () => {
    const productToStorage = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];

    const filterProduct = {
      product: product?._id,
      name: product?.name,
      image: product?.image,
      totalStock: product?.countInStock,
      countInStock: amount,
      price: product?.price,
      color: mainColor,
    };
    productToStorage.push(filterProduct);
    localStorage.setItem("cartItems", JSON.stringify(productToStorage));
    const subTotalFromStorage = localStorage.getItem("subTotal")
      ? localStorage.getItem("subTotal")
      : 0;
    const subTotal = subTotalFromStorage
      ? Number(subTotalFromStorage) + amount * product?.price
      : amount * product?.price;
    localStorage.setItem("subTotal", subTotal);
    toast.success("Item Added To Cart");
  };

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <Wrapper>
      <div className="colors">
        <span>colors :</span>
        <div>
          {color.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color?.code }}
                className={`${
                  mainColor === color?.code ? "color-btn active" : "color-btn"
                }`}
                onClick={() => setMainColor(color?.code)}>
                {mainColor === color?.code ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />

        <Link
          to="/cart"
          className="btn"
          id="addToCart"
          onClick={() => handleAddToCart()}>
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
