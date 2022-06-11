import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ColorTable from "../components/color/table/ColorTable";
import ColorToolbar from "../components/color/table/ColorToolbar";

const Color = () => {
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
            <ColorToolbar />
            <Box sx={{ mt: 3 }}>
              <ColorTable />
            </Box>
          </Container>
        </Box>
      </Grid>
    </div>
  );
};

export default Color;
