import { Box, Container, Grid } from "@mui/material";
import React from "react";
import BrandTable from "../components/brand/table/BrandTable";
import BrandToolbar from "../components/brand/table/BrandToolbar";

const Brand = () => {
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
            <BrandToolbar />
            <Box sx={{ mt: 3 }}>
              <BrandTable />
            </Box>
          </Container>
        </Box>
      </Grid>
    </div>
  );
};

export default Brand;
