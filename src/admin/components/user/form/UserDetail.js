import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

const UserDetail = ({ open, handleClose, data }) => {
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"User Detail"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Name : {data?.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Email : {data?.email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Is Admin : {data?.isAdmin ? "TRUE" : "FALSE"}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserDetail;
