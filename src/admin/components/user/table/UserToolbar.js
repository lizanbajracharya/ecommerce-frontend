import { Typography, Box } from "@mui/material";
import React from "react";

const UserToolbar = () => {
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
            Admins
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default UserToolbar;
