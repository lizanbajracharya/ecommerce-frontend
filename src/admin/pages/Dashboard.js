import { Box, Container, Grid } from "@mui/material";
import React from "react";
import TotalOrderItem from "../components/dashboard/TotalOrderItem";
import TotalUser from "../components/dashboard/TotalUser";
import { useGetOrderList } from "../hooks/api/order/useOrder";
import { useGetUserAdmin } from "../hooks/api/user/useUserAdmin";

const Dashboard = () => {
  const { data } = useGetUserAdmin();
  const { data: order } = useGetOrderList();
  const count = data && data?.data.length;
  const countOrder = order && order?.length;
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
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
