import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { useGetUserProfile } from "../hooks/api/useUser";
import styled from "styled-components";
import { useUserUpdate } from "../hooks/components/useUserUpdate";
import UpdatePasswordForm from "../webPagesComponents/UpdatePassword/UpdatePasswordForm";

const UserProfile = () => {
  const { data, isLoading, isError } = useGetUserProfile();
  const { formik, edit, handleEdit, handleCancel } = useUserUpdate(data);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return isLoading ? (
    <Skeleton variant="rectangular" width={210} height={118} />
  ) : isError ? (
    <>Something Error Occured...</>
  ) : (
    <Wrapper>
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>User Profile</h3>
      <div className="section section-center page">
        <Paper
          elevation={24}
          sx={{ m: 2 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60%",
            borderRadius: "15px",
          }}>
          <Grid container spacing={2} sx={{ m: 2 }}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Typography style={{ marginTop: edit ? "30px" : 0 }}>
                    Name:
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  {edit ? (
                    <TextField
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      fullWidth
                      id="name"
                      margin="normal"
                      name="name"
                    />
                  ) : (
                    <Typography>{data?.name}</Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Typography style={{ marginTop: edit ? "30px" : 0 }}>
                    Email:
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  {edit ? (
                    <TextField
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      fullWidth
                      id="email"
                      margin="normal"
                      name="email"
                    />
                  ) : (
                    <Typography>{data?.email}</Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {!edit ? (
                <Button
                  variant="contained"
                  id="editButton"
                  style={{ marginRight: "10px" }}
                  onClick={handleEdit}>
                  Edit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  id="updateButton"
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    formik.submitForm();
                  }}>
                  Update
                </Button>
              )}
              {!edit ? (
                <Button
                  variant="contained"
                  id="editPassword"
                  onClick={handleOpen}>
                  Edit Password
                </Button>
              ) : (
                <Button
                  variant="contained"
                  id="cancelButton"
                  style={{ marginRight: "10px" }}
                  onClick={handleCancel}>
                  Cancel
                </Button>
              )}
            </Grid>
          </Grid>
        </Paper>
      </div>
      <UpdatePasswordForm open={open} handleClose={handleClose} data={data} />
    </Wrapper>
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

export default UserProfile;
