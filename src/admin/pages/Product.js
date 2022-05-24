import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ProductTable from "../components/product/table/ProductTable";
import ProductToolbar from "../components/product/table/ProductToolbar";

const Product = () => {
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
            <ProductToolbar />
            <Box sx={{ mt: 3 }}>
              <ProductTable />
            </Box>
          </Container>
        </Box>
      </Grid>
    </div>
  );
};

export default Product;
