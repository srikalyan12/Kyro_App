import React from "react";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";

import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    border: "none",
    fontSize: 16,
  },
}));

function ProfilerAddedProject() {
  return (
    <>
      <Button
        variant="contained"
        sx={{ margin: "20px auto" }}
        color="error"
        startIcon={<AddIcon />}
      >
        Add Project
      </Button>
      <FormControl sx={{ m: 1, width: "50%" }}>
        <Select
          inputProps={{ "aria-label": "Without label" }}
          displayEmpty
          value={""}
          input={<BootstrapInput />}
        >
          <MenuItem sx={{ padding: "10px" }} value="">
            <div className="menu-list-format">
              <div>
                <Avatar
                  alt="profile"
                  src="/profileImage.jpg"
                  variant="square"
                />
              </div>
              <div>
                <div>
                  <strong>Adam</strong>
                </div>
                <div className="welcome-date">Project Manager</div>
              </div>
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default ProfilerAddedProject;
