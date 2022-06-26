import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useCommentEdit } from "../hooks/components/useCommentEdit";

const EditCommentForm = ({ open, handleClose, data, menuClose }) => {
  const { formik, handleStar, value: star } = useCommentEdit(data);
  const buttonStyle = {
    margin: "8px 0",
  };
  return (
    <div>
      <Dialog open={open} onClose={() => handleClose()}>
        <DialogTitle>Update Comment</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Comment"
                label="Comment"
                id="comment"
                name="comment"
                onBlur={formik.handleBlur}
                value={formik.values.comment}
                onChange={formik.handleChange}
                error={formik.touched.comment && Boolean(formik.errors.comment)}
                helperText={
                  formik.touched.comment && formik.errors.comment
                }></TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography>Rating</Typography>
              <Rating
                name="size-large"
                value={star}
                onChange={(event, value) => handleStar(value)}
                size="large"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            id="submitButtonComment"
            color="primary"
            style={buttonStyle}
            onClick={() => {
              formik.submitForm();
              handleClose();
              menuClose();
            }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditCommentForm;
