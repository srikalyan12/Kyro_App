import React from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import IconList from "./IconList";

import "./sidebar.css";

const Sidebar = (props) => {
  const { handleShowDraw, showDraw } = props;
  const propsIconButton = {
    edge: "start",
    color: "black",
    size: "medium",
    disableRipple: true,
  };
  return (
    <div className="sidebar-Wrapper">
      <div className="sidebar-icons sidebar-icons-list">
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleShowDraw(!showDraw);
          }}
          size="medium"
          className={showDraw ? "hanburger-icon" : ""}
          {...propsIconButton}
        >
          {showDraw && (
            <img src="/kyro.png" alt="logo" height="20px" width="120px" />
          )}
          <MenuIcon height="50px" width="50px" fontSize="medium" />
        </IconButton>
        <IconList {...props} />
      </div>
      <div className="sidebar-icons">
        <IconButton
          className={showDraw ? "list-icon" : ""}
          {...propsIconButton}
        >
          <LogoutRoundedIcon height="50px" width="50px" fontSize="medium" />
          {showDraw && <span className="icon-label">Logout</span>}
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
