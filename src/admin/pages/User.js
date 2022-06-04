import { Box, Container, Grid } from "@mui/material";
import React from "react";
import UserTable from "../components/user/table/UserTable";
import UserToolbar from "../components/user/table/UserToolbar";

const User = () => {
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
            <UserToolbar />
            <Box sx={{ mt: 3 }}>
              <UserTable />
            </Box>
          </Container>
        </Box>
      </Grid>
    </div>
  );
};

export default User;
