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
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CircularProgress from "@mui/material/CircularProgress";
import { useHistory } from "react-router-dom";

const TotalAdmin = ({ admin }) => {
  const history = useHistory();
  return (
    <div>
      <Paper elevation={24}>
        <Card>
          <CardContent>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: "space-between" }}>
              <Grid item>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline">
                  TOTAL ADMINS
                </Typography>
                <Typography color="textPrimary" variant="h4">
                  {admin ? admin : <CircularProgress />}
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
                    <AdminPanelSettingsIcon />
                  </Avatar>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
};

export default TotalAdmin;
