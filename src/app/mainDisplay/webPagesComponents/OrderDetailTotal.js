import { PayPalButton } from "react-paypal-button-v2";

import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../utils/helpers";
import { useOrderPay } from "../hooks/api/useOrderApi";
import { Button } from "@mui/material";

const OrderDetailTotal = ({
  total_amount,
  tax_fee,
  total,
  shipping_fee,
  paid,
  id,
  delivered,
}) => {
  const [sdkReady, setSdkReady] = useState(false);
  const { mutate: payMutate } = useOrderPay({});

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!window.paypal) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  }, []);
  const successPaymentHandler = (paymentResult) => {
    const formData = {
      orderId: id,
      paymentResult: paymentResult,
    };
    payMutate(formData);
  };
  return (
    <div>
      <div>
        <Wrapper>
          <div>
            <article>
              <h5>
                subtotal :<span>{formatPrice(total_amount)}</span>
              </h5>
              <p>
                shipping fee :<span>{formatPrice(shipping_fee)}</span>
              </p>
              <p>
                tax :<span>{formatPrice(tax_fee)}</span>
              </p>
              <hr />
              <h4>
                Total :<span>{formatPrice(total)}</span>
              </h4>
            </article>
            {!paid ? (
              <PayPalButton
                id="payButton"
                amount={total}
                onSuccess={successPaymentHandler}
              />
            ) : !delivered ? (
              <>
                <Button
                  variant="contained"
                  color="error"
                  disabled
                  className="btn">
                  Already Paid Ready To Be Delivered
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="error"
                  disabled
                  className="btn">
                  Already Delivered
                </Button>
              </>
            )}
          </div>
        </Wrapper>
      </div>
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

export default OrderDetailTotal;
