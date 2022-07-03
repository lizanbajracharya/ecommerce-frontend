import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const PaymentPage = () => {
  const history = useHistory();
  const handleNext = () => {
    history.push("/order");
    localStorage.setItem("paymentMethod", "paypal");
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}>
      <Wrapper>
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          Payment Method
        </h3>
        <Paper elevation={2} sx={{ m: 10, pb: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ marginTop: "20px" }}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Payment Method
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group">
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label="Paypal"
                  />
                  {/* <FormControlLabel
                    value="cod"
                    control={<Radio />}
                    label="Cash On Delivery"
                  /> */}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                id="paymentButton"
                onClick={handleNext}>
                Proceed To Checkout
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default PaymentPage;
