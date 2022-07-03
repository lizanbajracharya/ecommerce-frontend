import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { useHistory } from "react-router-dom";

const TotalUser = ({ user }) => {
  const history = useHistory();
  return (
    <Paper elevation={24}>
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
              <Button onClick={() => history.push("/admin/users")}>
                <Avatar
                  sx={{
                    backgroundColor: "success.main",
                    height: 56,
                    width: 56,
                  }}>
                  <PeopleIcon />
                </Avatar>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default TotalUser;
