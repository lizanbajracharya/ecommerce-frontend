import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  styled,
  MenuItem,
  Menu,
  Avatar,
  Typography,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import PasswordIcon from "@mui/icons-material/Password";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useGetUserProfile } from "../../mainDisplay/hooks/api/useUser";
import UpdatePasswordForm from "../../mainDisplay/webPagesComponents/UpdatePassword/UpdatePasswordForm";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const NavBar = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState();
  const { data } = useGetUserProfile();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const { onSidebarOpen, ...other } = props;

  function signOutClicked() {
    localStorage.removeItem("loginInfo");
    window.location.href = "/home";
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}>
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
            component="button">
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0, ml: 2 }}>
            <Tooltip title="Open Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Admin Panel" children={<AccountCircleIcon />} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <IconButton onClick={handleOpen} sx={{ p: 0 }}>
                    <PasswordIcon sx={{ mr: 2 }} />
                    <span style={{ fontSize: "15px" }}>Change Password</span>
                  </IconButton>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <IconButton onClick={signOutClicked} sx={{ p: 0 }}>
                    <LogoutIcon sx={{ mr: 2 }} />
                    <span style={{ fontSize: "15px" }}>Logout</span>
                  </IconButton>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </DashboardNavbarRoot>
      <UpdatePasswordForm open={open} handleClose={handleClose} data={data} />
    </>
  );
};

export default NavBar;
