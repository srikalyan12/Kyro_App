import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Box, Stack } from "@mui/system";

import Navbar from "../Navbar";
import Profile from "../Profile";

class AppPage extends React.Component {
  render() {
    return (
      <Box sx={{ width: "100%", height: "100%" }}>
        <Stack sx={{ width: "100%", height: "100%" }} spacing={0}>
          <Toolbar>
            <Navbar />
          </Toolbar>
          <Box sx={{ paddingLeft: "24px", flex: "1" }}>
            <Profile />
          </Box>
        </Stack>
      </Box>
    );
  }
}

export default AppPage;
