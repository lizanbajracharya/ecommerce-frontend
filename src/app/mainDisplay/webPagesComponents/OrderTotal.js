import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../../utils/helpers";

const OrderTotal = ({ total_amount, tax_fee, total, handleCreate }) => {
  return (
    <div>
      <Wrapper>
        <div>
          <article>
            <h5>
              subtotal :<span>{formatPrice(total_amount)}</span>
            </h5>
            <p>
              shipping fee :<span>{formatPrice(100000)}</span>
            </p>
            <p>
              tax :<span>{formatPrice(tax_fee)}</span>
            </p>
            <hr />
            <h4>
              Total :<span>{formatPrice(total)}</span>
            </h4>
          </article>
          <Button
            variant="contained"
            id="orderItems"
            color="error"
            onClick={handleCreate}
            className="btn">
            Order
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default OrderTotal;
