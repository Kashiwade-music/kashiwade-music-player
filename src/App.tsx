import React from "react";
import logo from "./logo.svg";
import tauriCircles from "./tauri.svg";
import tauriWord from "./wordmark.svg";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SplitPane from "react-split-pane";
import GridLayout from "react-grid-layout";
import gridStyle from "./css/grid.module.css";
import styled from "styled-components";
import "./App.css";

function App() {
  const GridParent = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr 250px;
    grid-template-rows: 50px repeat(2, 1fr) 50px;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100vh;
  `;

  const GridTopMenu = styled.div`
    grid-area: 1 / 1 / 2 / 4;
  `;
  const GridLeftMenu = styled.div`
    grid-area: 2 / 1 / 4 / 2;
  `;
  const GridMainView = styled.div`
    grid-area: 2 / 2 / 4 / 3;
  `;
  const GridRightMenu = styled.div`
    grid-area: 2 / 3 / 4 / 4;
  `;
  const GridBottomMenu = styled.div`
    grid-area: 4 / 1 / 5 / 4;
  `;
  return (
    <div className="App">
      <GridParent>
        <GridTopMenu>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "primary.dark",
            }}
          ></Box>
        </GridTopMenu>
        <GridLeftMenu>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "primary.light",
            }}
          ></Box>
        </GridLeftMenu>
        <GridMainView>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "secondary.light",
            }}
          ></Box>
        </GridMainView>
        <GridRightMenu>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "success.main",
            }}
          ></Box>
        </GridRightMenu>
        <GridBottomMenu>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "secondary.dark",
            }}
          ></Box>
        </GridBottomMenu>
      </GridParent>
    </div>
  );
}

export default App;
