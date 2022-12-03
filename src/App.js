import "./App.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Sidebar from "./Components/Sidebar";

function App() {
  const [showDraw, handleShowDraw] = useState(false);
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid className="animationclass" xs={showDraw ? 2 : 0.6}>
            <Sidebar showDraw={showDraw} handleShowDraw={handleShowDraw} />
          </Grid>
          <Grid xs={showDraw ? 6 : 7}>dlsld</Grid>
          <Grid xs={showDraw ? 4 : 4}>dlsld</Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
