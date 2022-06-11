import { Box, Typography } from "@mui/material";
import React from "react";

const BrandToolbar = () => {
  return (
    <div>
      <Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            m: -1,
          }}>
          <Typography sx={{ m: 1 }} variant="h4">
            Brands
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default BrandToolbar;
