import { Box, Container, Grid } from "@mui/material";
import React from "react";
import OrderTable from "../components/order/table/OrderTable";
import OrderToolbar from "../components/order/table/OrderToolbar";

const Order = () => {
  return (
    <div>
      <Grid container direction="row">
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 4,
          }}>
          <Container maxWidth={false}>
            <OrderToolbar />
            <Box sx={{ mt: 3 }}>
              <OrderTable />
            </Box>
          </Container>
        </Box>
      </Grid>
    </div>
  );
};

export default Order;
