import { Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useShippingForm } from "../hooks/components/shipping/useShippingForm";

const ShippingPage = () => {
  const { formik } = useShippingForm();
  const history = useHistory();
  return (
    <div
      style={{
        textAlign: "center",
      }}>
      <Wrapper>
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          Shipping Details
        </h3>
        <Paper elevation={2} sx={{ m: 10, pb: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ marginTop: "20px" }}>
              <TextField
                label="Address"
                id="address"
                name="address"
                placeholder="Enter Address"
                onBlur={formik.handleBlur}
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                sx={{ width: "30%" }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="City"
                id="city"
                name="city"
                placeholder="Enter City"
                onBlur={formik.handleBlur}
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                sx={{ width: "30%" }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Postal Code"
                id="postalCode"
                name="postalCode"
                placeholder="Enter Postal Code"
                onBlur={formik.handleBlur}
                value={formik.values.postalCode}
                onChange={formik.handleChange}
                error={
                  formik.touched.postalCode && Boolean(formik.errors.postalCode)
                }
                helperText={
                  formik.touched.postalCode && formik.errors.postalCode
                }
                sx={{ width: "30%" }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Country"
                id="country"
                name="country"
                placeholder="Enter Country"
                onBlur={formik.handleBlur}
                value={formik.values.country}
                onChange={formik.handleChange}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
                sx={{ width: "30%" }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3} style={{ justifyContent: "center" }}>
                <Grid item xs={2}>
                  <Button
                    variant={"contained"}
                    id="shippingPage"
                    disabled={!(formik.isValid && formik.dirty)}
                    onClick={() => {
                      formik.submitForm();
                    }}>
                    Proceed To Payment
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant={"contained"}
                    onClick={() => history.push("/cart")}>
                    Go back
                  </Button>
                </Grid>
              </Grid>
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

export default ShippingPage;
