import React from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import CircularProgress from "@mui/material/CircularProgress";

const TotalUser = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              TOTAL USERS
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {user ? user : <CircularProgress />}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "success.main",
                height: 56,
                width: 56,
              }}>
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TotalUser;
