import React, { useEffect, useState } from "react";
import { Collapse } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";
import TopToolBarAria from "./TopToolBarAria/TopToolBarAria";
import LeftZone from "./LeftZone/LeftZone";
import ProjectZone from "./ProjectZone/ProjectZone";

import { useSelector } from "react-redux";
import {
  selectViewStatsLeftZone,
  selectViewStatsUpperZone,
  selectViewStatsRightZone,
} from "./redux/slice/ViewStatsSlice";

const FlexParent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  height: 100vh;
  max-height: 100vh;
`;
const FlexTopToolBarAria = styled.div`
  height: 30px;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
`;

const FlexMainAria = styled.div`
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
  height: calc(100% - 80px);
`;

const FlexMainAriaBox = styled.div`
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
`;

const FlexLeftZone = styled.div`
  width: 250px;
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
  height: 100%;
  max-height: 100%;
`;
const FlexMainZone = styled.div`
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
  height: 100%;
  max-height: 100%;
`;

const FlexMainZoneBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  height: 100%;
  max-height: 100%;
`;

const FlexMainZoneUpperZone = styled.div`
  height: 150px;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
`;

const FlexMainZoneProjectZone = styled.div`
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
  height: calc(100% - 150px);
`;

const FlexRightZone = styled.div`
  width: 250px;
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
  height: 100%;
  max-height: 100%;
`;
const FlexBottomToolBarAria = styled.div`
  height: 50px;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
`;

function App() {
  const ViewStatsLeftZone = useSelector(selectViewStatsLeftZone);
  const ViewStatsUpperZone = useSelector(selectViewStatsUpperZone);
  const ViewStatsRightZone = useSelector(selectViewStatsRightZone);

  return (
    <div className="App">
      <FlexParent>
        <FlexTopToolBarAria>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderBottom: 1,
              borderColor: "divider",
              boxSizing: "border-box",
            }}
          >
            <TopToolBarAria />
          </Box>
        </FlexTopToolBarAria>
        <FlexMainAria>
          <FlexMainAriaBox>
            <Collapse
              in={ViewStatsLeftZone}
              timeout="auto"
              orientation="horizontal"
            >
              <FlexLeftZone>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRight: 1,
                    borderColor: "divider",
                    boxSizing: "border-box",
                  }}
                >
                  <LeftZone />
                </Box>
              </FlexLeftZone>
            </Collapse>
            <FlexMainZone>
              <FlexMainZoneBox>
                <Collapse in={ViewStatsUpperZone} timeout="auto" unmountOnExit>
                  <FlexMainZoneUpperZone>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderBottom: 1,
                        borderColor: "divider",
                        boxSizing: "border-box",
                      }}
                    ></Box>
                  </FlexMainZoneUpperZone>
                </Collapse>
                <FlexMainZoneProjectZone>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <ProjectZone />
                  </Box>
                </FlexMainZoneProjectZone>
              </FlexMainZoneBox>
            </FlexMainZone>
            <Collapse
              in={ViewStatsRightZone}
              timeout="auto"
              unmountOnExit
              orientation="horizontal"
            >
              <FlexRightZone>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderLeft: 1,
                    borderColor: "divider",
                    boxSizing: "border-box",
                  }}
                ></Box>
              </FlexRightZone>
            </Collapse>
          </FlexMainAriaBox>
        </FlexMainAria>
        <FlexBottomToolBarAria>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "secondary.dark",
            }}
          ></Box>
        </FlexBottomToolBarAria>
      </FlexParent>
    </div>
  );
}

export default App;
