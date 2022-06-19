import React from "react";
import { Box, Button, ListItem, Link } from "@mui/material";
import { useHistory } from "react-router-dom";

const NavItem = (props) => {
  const { href, icon, id, title, ...others } = props;
  const history = useHistory();
  const active = href ? history?.location.pathname === href : false;

  function linkClick(link) {
    history.push(link);
  }
  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}>
      <Link onClick={() => linkClick(href)}>
        <Button
          startIcon={icon}
          disableRipple
          id={id}
          sx={{
            backgroundColor: active ? "rgba(255,255,255, 0.08)" : undefined,
            borderRadius: 1,
            color: active ? "#10B981" : "#D1D5DB",
            fontWeight: active ? "fontWeightBold" : undefined,
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            width: "247px !important",
            "& .MuiButton-startIcon": {
              color: active ? "#10B981" : "#9CA3AF",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
            },
          }}>
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </Link>
    </ListItem>
  );
};

export default NavItem;
