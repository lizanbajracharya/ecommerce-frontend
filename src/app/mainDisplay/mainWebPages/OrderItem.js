import React from "react";
import styled from "styled-components";
import { useOrder } from "../hooks/components/order/useOrder";
import CartColumns from "../webPagesComponents/CartColumns";
import OrderItemList from "../webPagesComponents/OrderItemList";
import OrderTotal from "../webPagesComponents/OrderTotal";
import ShippingColumn from "../webPagesComponents/ShippingColumn";
import ShippingItem from "../webPagesComponents/ShippingItem";

const OrderItem = () => {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const shipping = JSON.parse(localStorage.getItem("shippingDetail"));
  const payment = localStorage.getItem("paymentMethod");
  const { handleSubmit } = useOrder();
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.countInStock,
    0
  );
  const taxPrice = Number(0.15 * subtotal);
  const totalPrice = Number(subtotal) + 100000 + Number(taxPrice);

  const handleCreate = () => {
    const formData = {
      orderItems: cart,
      shippingAddress: shipping,
      paymentMethod: payment,
      itemsPrice: subtotal,
      taxPrice: taxPrice,
      shippingPrice: 100000,
      totalPrice: totalPrice,
    };
    handleSubmit(formData);
  };
  return (
    <div>
      <Wrapper className="section section-center">
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Order Details
        </h3>
        <CartColumns />
        {cart.map((item, index) => {
          return <OrderItemList key={item._id} {...item} index={index} />;
        })}
        <hr />
        <br />
        <ShippingColumn />
        <ShippingItem {...shipping} />
        <hr />
        <br />
        Payment Method: {payment}
        <hr />
        <OrderTotal
          total_amount={subtotal}
          tax_fee={taxPrice}
          total={totalPrice}
          handleCreate={handleCreate}
        />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;

export default OrderItem;
