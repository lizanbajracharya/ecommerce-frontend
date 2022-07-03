import React from "react";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import InventoryIcon from "@mui/icons-material/Inventory";
import { toast } from "react-toastify";

const CartButton = () => {
  const history = useHistory();
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
  const total_items = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  const handleLogout = () => {
    localStorage.removeItem("loginInfo");
    history.push("/home");
    toast.success("Successfully Logout");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items.length}</span>
        </span>
      </Link>
      {loginInfo ? (
        <>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                id="avatar"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}>
                <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
            <MenuItem>
              <ListItemIcon>
                <IconButton
                  onClick={() => history.push("/profile")}
                  id="profile"
                  sx={{ p: 0 }}>
                  <ListItemIcon>
                    <Avatar />
                  </ListItemIcon>
                  <span style={{ fontSize: "17px" }}>Profile</span>
                </IconButton>
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <IconButton
                  onClick={() => history.push("/wishlist")}
                  id="wishList"
                  sx={{ p: 0 }}>
                  <ListItemIcon>
                    <BookmarkIcon fontSize="small" />
                  </ListItemIcon>
                  <span style={{ fontSize: "17px" }}>Wishlist Product</span>
                </IconButton>
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <IconButton
                  onClick={() => history.push("/orderlist")}
                  id="orderlist"
                  sx={{ p: 0 }}>
                  <ListItemIcon>
                    <InventoryIcon fontSize="small" />
                  </ListItemIcon>
                  <span style={{ fontSize: "17px" }}>Order List</span>
                </IconButton>
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <IconButton
                  onClick={() => handleLogout()}
                  id="logoutButton"
                  sx={{ p: 0 }}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <span style={{ fontSize: "17px" }}>Logout</span>
                </IconButton>
              </ListItemIcon>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <button
          type="button"
          onClick={() => history.push("/login")}
          className="auth-btn">
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButton;
