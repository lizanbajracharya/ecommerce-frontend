import { Box, Container, Grid } from "@mui/material";
import React from "react";
import TotalUser from "../components/dashboard/TotalUser";
import { useGetUserAdmin } from "../hooks/api/user/useUserAdmin";

const Dashboard = () => {
  const { data } = useGetUserAdmin();
  const count = data && data?.data.length;
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
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
