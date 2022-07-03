import React, { useState } from "react";
import {
  Avatar,
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
import axios from "axios";

const UserProfile = () => {
  const { data, isLoading, isError } = useGetUserProfile();
  const { formik, edit, handleEdit, handleCancel, setImage } =
    useUserUpdate(data);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        proxy: {
          port: 3000,
        },
      };

      const { data: imageData } = await axios.post(
        "/api/upload",
        formData,
        config
      );

      setImage(imageData);
    } catch (error) {
      console.error(error);
    }
  };

  return isLoading ? (
    <Skeleton variant="rectangular" width={210} height={118} />
  ) : isError ? (
    <>Something Error Occured...</>
  ) : (
    <Wrapper>
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>User Profile</h3>
      <div className="section-center page">
        <Paper
          elevation={24}
          sx={{ m: 2 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
          }}>
          <Grid container spacing={2} sx={{ m: 2 }}>
            <Grid
              item
              xs={12}
              style={{
                left: "50%",
                transform: "translate(-50%,0)",
                position: "absolute",
                zIndex: 1,
                marginBottom: "50px",
              }}>
              <Avatar src={data?.image} sx={{ width: 150, height: 150 }} />
              {edit && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="image"
                    style={{ marginBottom: "50px" }}
                    name="image"
                    type={"file"}
                    onChange={uploadFileHandler}
                  />
                </>
              )}
            </Grid>
            <Grid item xs={6} style={{ marginTop: "220px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    style={{ marginTop: edit ? "30px" : 0 }}
                    variant="h5">
                    Name:
                  </Typography>
                </Grid>
                <Grid item xs={12}>
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
                    <Typography>{data?.name || "-"}</Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} style={{ marginTop: "220px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    style={{ marginTop: edit ? "30px" : 0 }}
                    variant="h5">
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
                    <Typography>{data?.email || "-"}</Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    style={{ marginTop: edit ? "30px" : 0 }}
                    variant="h5">
                    Address
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {edit ? (
                    <TextField
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.address && Boolean(formik.errors.address)
                      }
                      helperText={
                        formik.touched.address && formik.errors.address
                      }
                      fullWidth
                      id="address"
                      margin="normal"
                      name="address"
                    />
                  ) : (
                    <Typography>{data?.address || "-"}</Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    style={{ marginTop: edit ? "30px" : 0 }}
                    variant="h5">
                    Phone:
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  {edit ? (
                    <TextField
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                      fullWidth
                      id="phone"
                      margin="normal"
                      name="phone"
                    />
                  ) : (
                    <Typography>{data?.phone || "-"}</Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    style={{ marginTop: edit ? "30px" : 0 }}
                    variant="h5">
                    Country:
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {edit ? (
                    <TextField
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.country && Boolean(formik.errors.country)
                      }
                      helperText={
                        formik.touched.country && formik.errors.country
                      }
                      fullWidth
                      id="country"
                      margin="normal"
                      name="country"
                    />
                  ) : (
                    <Typography>{data?.country || "-"}</Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    style={{ marginTop: edit ? "30px" : 0 }}
                    variant="h5">
                    City:
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  {edit ? (
                    <TextField
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      error={formik.touched.city && Boolean(formik.errors.city)}
                      helperText={formik.touched.city && formik.errors.city}
                      fullWidth
                      id="city"
                      margin="normal"
                      name="city"
                    />
                  ) : (
                    <Typography>{data?.city || "-"}</Typography>
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
