import { Skeleton } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetOrderById } from "../hooks/api/useOrderApi";
import CartColumns from "../webPagesComponents/CartColumns";
import OrderDetailTotal from "../webPagesComponents/OrderDetailTotal";
import OrderItemList from "../webPagesComponents/OrderItemList";
import ShippingColumn from "../webPagesComponents/ShippingColumn";
import ShippingItem from "../webPagesComponents/ShippingItem";

const SingleOrderPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetOrderById(id);
  const subtotal = data?.orderItems.reduce(
    (acc, item) => acc + item.price * item.countInStock,
    0
  );
  return isLoading ? (
    <Skeleton />
  ) : isError ? (
    <>Something Occured</>
  ) : (
    <div>
      <Wrapper className="section section-center">
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Order Details
        </h3>
        <CartColumns />
        {data?.orderItems.map((item, index) => {
          return <OrderItemList key={item._id} {...item} index={index} />;
        })}
        <hr />
        <br />
        <ShippingColumn />
        <ShippingItem {...data?.shippingAddress} />
        <hr />
        <br />
        Payment Method: {data?.paymentMethod}
        <hr />
        <OrderDetailTotal
          total_amount={subtotal}
          tax_fee={data?.taxPrice}
          total={data?.totalPrice}
          shipping_fee={data?.shippingPrice}
          id={id}
          paid={data?.isPaid}
          delivered={data?.isDelivered}
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

export default SingleOrderPage;
