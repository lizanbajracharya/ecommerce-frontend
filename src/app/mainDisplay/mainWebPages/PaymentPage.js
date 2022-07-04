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
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import paypal from "../../../assets/196566.png";
import cod from "../../../assets/download.png";
import esewa from "../../../assets/esewa2.png";
import khalti from "../../../assets/Khalti_Digital_Wallet_Logo.png";

const PaymentPage = () => {
  const history = useHistory();
  const [state, setState] = useState();

  const handleNext = () => {
    history.push("/order");
    localStorage.setItem("paymentMethod", state);
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}>
      <Wrapper>
        <h3 style={{ textAlign: "center", paddingTop: "80px" }}>
          Payment Method
        </h3>
        <Paper elevation={2} sx={{ m: 10, pb: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ marginTop: "20px" }}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong> Payment Method</strong>
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group">
                  <FormControlLabel
                    value="esewa"
                    control={<Radio />}
                    onChange={(event) => setState(event.target.value)}
                    label={
                      <img src={esewa} style={{ height: "40px" }} alt="esewa" />
                    }
                  />
                  <FormControlLabel
                    value="khalti"
                    control={<Radio />}
                    onChange={(event) => setState(event.target.value)}
                    label={
                      <img
                        src={khalti}
                        style={{ height: "90px" }}
                        alt="khalti"
                      />
                    }
                  />
                  <FormControlLabel
                    value="paypal"
                    onChange={(event) => setState(event.target.value)}
                    control={<Radio />}
                    label={
                      <img
                        src={paypal}
                        style={{ height: "90px" }}
                        alt="paypal"
                      />
                    }></FormControlLabel>
                  <FormControlLabel
                    value="cod"
                    onChange={(event) => setState(event.target.value)}
                    control={<Radio />}
                    label={
                      <img src={cod} style={{ height: "50px" }} alt="cod" />
                    }
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                id="paymentButton"
                disabled={state ? false : true}
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
