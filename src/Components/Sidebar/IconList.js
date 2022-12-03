import React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MailIcon from "@mui/icons-material/Mail";

import { iconProps } from "./../../constant";

const NavList = [
  { component: HomeSharpIcon, title: "Home" },
  { component: PendingActionsRoundedIcon, title: "Projects" },
  { component: GridViewRoundedIcon, title: "Dashboard" },
  { component: QuestionAnswerRoundedIcon, title: "Messages" },
  { component: ArticleRoundedIcon, title: "Documents" },
  { component: MapsHomeWorkRoundedIcon, title: "Organizations" },
  { component: SettingsRoundedIcon, title: "Settings" },
];

const IconList = ({ showDraw }) => {
  return NavList.map((list) => {
    let Component = list.component;
    return (
      <IconButton
        key={list.title}
        className={showDraw ? "list-icon" : ""}
        {...iconProps}
      >
        <Component height="50px" width="50px" fontSize="medium" />
        {showDraw && (
          <span className="icon-label">
            {list.title}
            {list.title === "Messages" && (
              <span>
                <Badge
                  sx={{
                    fontSize: "12px",
                    marginLeft: "10px",
                  }}
                  color="error"
                  badgeContent={8}
                >
                  <MailIcon fontSize="small" />
                </Badge>
              </span>
            )}
          </span>
        )}
      </IconButton>
    );
  });
};

export default IconList;
