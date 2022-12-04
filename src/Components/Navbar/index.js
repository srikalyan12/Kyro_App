import React from "react";

import Grid from "@mui/material/Grid";

import ProfilerAddedProject from "./ProfilerAddedProject";
import WelcomeMessage from "./WelcomeMessage";
import "./navbar.css";

const Navbar = () => {
  return (
    <Grid container>
      <Grid xs={8} sx={{ margin: "20px auto" }}>
        <WelcomeMessage />
      </Grid>
      <Grid xs={4}>
        <ProfilerAddedProject />
      </Grid>
    </Grid>
  );
};

export default Navbar;
