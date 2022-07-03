import { Box, Container, Grid } from "@mui/material";
import React from "react";
import TotalAdmin from "../components/dashboard/TotalAdmin";
import TotalOrderItem from "../components/dashboard/TotalOrderItem";
import TotalProduct from "../components/dashboard/TotalProduct";
import TotalUser from "../components/dashboard/TotalUser";
import { useGetOrderList } from "../hooks/api/order/useOrder";
import { useGetProductAdmin } from "../hooks/api/product/useProductAdmin";
import { useGetUserAdmin } from "../hooks/api/user/useUserAdmin";

const Dashboard = () => {
  const { data } = useGetUserAdmin();
  const { data: order } = useGetOrderList();
  const { data: product } = useGetProductAdmin();
  const filterData = data?.data.filter((d) => d?.isAdmin === true);
  const filterDataUser = data?.data.filter((d) => d?.isAdmin !== true);
  const count = filterDataUser && filterDataUser?.length;
  const countAdmin = filterData && filterData?.length;
  const countOrder = order && order?.length;
  const countProduct = product && product?.products?.length;
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}>
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xl={6} lg={6} sm={6} xs={12}>
              <TotalUser user={count} />
            </Grid>
            <Grid item xl={6} lg={6} sm={6} xs={12}>
              <TotalOrderItem countOrder={countOrder} />
            </Grid>
            <Grid item xl={6} lg={6} sm={6} xs={12}>
              <TotalAdmin admin={countAdmin} />
            </Grid>
            <Grid item xl={6} lg={6} sm={6} xs={12}>
              <TotalProduct product={countProduct} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
