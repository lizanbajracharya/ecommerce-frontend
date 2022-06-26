import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  IconButton,
  ListItemIcon,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import CommentForm from "./CommentForm";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditCommentForm from "./EditCommentForm";
import { useDeleteComment } from "../hooks/api/useProduct";
import { useParams } from "react-router-dom";

const ITEM_HEIGHT = 20;

const DeleteDialog = ({ open, handleClose, handleSubmit }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to remove the comment?"}
      </DialogTitle>

      <DialogActions>
        <Button onClick={handleSubmit} id="yes">
          Yes
        </Button>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Comment = ({ comment }) => {
  // Initial State
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [commentData, setCommentData] = useState();
  const [openEdit, setOpenEdit] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  //Api Call
  const { mutate } = useDeleteComment({});

  /* Function Starts */
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleOpenEdit = (value) => {
    setOpenEdit(true);
    setCommentData(value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    mutate(id);
    setOpenDelete(false);
    setAnchorEl(null);
  };
  /* Function Ends */

  // Needed For component render data
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
  const filterUser = comment.filter((user) => user?.user === loginInfo?._id);
  const { id } = useParams();

  return (
    <Wrapper>
      <h3 style={{ textAlign: "center" }}>User Reviews</h3>
      {loginInfo && (
        <Button
          type="submit"
          variant="contained"
          id="addComment"
          disabled={filterUser.length > 0 ? true : false}
          style={{ float: "right" }}
          color="primary"
          onClick={() => {
            handleOpen();
          }}>
          {filterUser.length > 0 ? "Already Commented" : " Add Comment"}
        </Button>
      )}
      {comment.length > 0 ? (
        comment.map((c) => (
          <>
            <Paper elevation={24} sx={{ p: 2, mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={1}>
                      <Avatar>U</Avatar>
                    </Grid>
                    <Grid item xs={10} style={{ marginTop: "6px" }}>
                      {c.name}
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={openMenu ? "long-menu" : undefined}
                        aria-expanded={openMenu ? "true" : undefined}
                        aria-haspopup="true"
                        style={{
                          display: filterUser.length > 0 ? "block" : "none",
                        }}
                        onClick={handleClick}>
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleCloseMenu}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "10ch",
                          },
                        }}>
                        <MenuItem>
                          <ListItemIcon>
                            <IconButton
                              onClick={() => handleOpenEdit(c)}
                              id="editComment"
                              sx={{ p: 0 }}>
                              <span
                                style={{
                                  fontSize: "15px",
                                }}>
                                Edit
                              </span>
                            </IconButton>
                          </ListItemIcon>
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon>
                            <IconButton
                              onClick={() => handleOpenDelete()}
                              id="deleteComment"
                              sx={{ p: 0 }}>
                              <span
                                style={{
                                  fontSize: "15px",
                                }}>
                                Delete
                              </span>
                            </IconButton>
                          </ListItemIcon>
                        </MenuItem>
                      </Menu>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <Rating value={c?.rating} readOnly />
                    </Grid>
                    <Grid item xs={9}>
                      {c?.createdAt}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Comment</Typography>
                  <span
                    style={{
                      whiteSpace: "pre-wrap",
                      overflowWrap: "break-word",
                    }}>
                    {c?.comment}
                  </span>
                </Grid>
              </Grid>
            </Paper>
          </>
        ))
      ) : (
        <>No Comment For The Product</>
      )}
      <CommentForm open={open} handleClose={handleClose} />
      <EditCommentForm
        open={openEdit}
        handleClose={handleCloseEdit}
        data={commentData}
        menuClose={handleCloseMenu}
      />
      <DeleteDialog
        open={openDelete}
        handleClose={handleCloseDelete}
        handleSubmit={handleDelete}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

export default Comment;
