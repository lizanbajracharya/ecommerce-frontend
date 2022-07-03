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
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CircularProgress from "@mui/material/CircularProgress";
import { useHistory } from "react-router-dom";

const TotalProduct = ({ product }) => {
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
                  TOTAL PRODUCTS
                </Typography>
                <Typography color="textPrimary" variant="h4">
                  {product ? product : <CircularProgress />}
                </Typography>
              </Grid>
              <Grid item>
                <Button onClick={() => history.push("/admin/products")}>
                  <Avatar
                    sx={{
                      backgroundColor: "success.main",
                      height: 56,
                      width: 56,
                    }}>
                    <ProductionQuantityLimitsIcon />
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

export default TotalProduct;
