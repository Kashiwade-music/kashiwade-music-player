import React, { useEffect, useState } from "react";
import { Collapse } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";
import BasicTabs from "./components/BasicTabs";
import BasicTabsNoHidden from "./components/BasicTabsNoHidden";
import { Button } from "@mui/material";
import * as initialObj from "./module/initialObj";
import "./App.css";
import FolderList from "./components/FolderList";
import { width } from "@mui/system";
import getAPI from "./module/getAPI";
import TopMenuBar from "./components/TopMenuBar";
import FileList from "./components/FileList";
import { useSelector, useDispatch } from "react-redux";
import {
  selectViewStatsLeft,
  selectViewStatsMidUpper,
  selectViewStatsRight,
} from "./redux/slice/ViewStatsSlice";
import {
  changeShouldShowDirPathInMidMain,
  addOpeningDirInTree,
  deleteOpeningDirInTree,
  selectShouldShowDirPathInMidMain,
  selectOpeningDirInTree,
} from "./redux/slice/SelectedFolderStatsSlice";

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
  const ViewStatsLeft = useSelector(selectViewStatsLeft);
  const ViewStatsMidUpper = useSelector(selectViewStatsMidUpper);
  const ViewStatsRight = useSelector(selectViewStatsRight);
  const OpeningDirInTree = useSelector(selectOpeningDirInTree);
  const dispatch = useDispatch();

  const isOpenFunc = (value: string) => {
    return OpeningDirInTree.includes(value);
  };

  const [mainWindowStats, setMainWindowStats] = useState(
    initialObj.mainWindowStats
  );
  const [config, setConfig] = useState<api.Config>(initialObj.config);
  useEffect(() => {
    getAPI("get_lanch_config", setConfig);
  }, []);

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
            <TopMenuBar />
          </Box>
        </FlexTopToolBarAria>
        <FlexMainAria>
          <FlexMainAriaBox>
            <Collapse
              in={ViewStatsLeft}
              timeout="auto"
              unmountOnExit
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
                  <BasicTabsNoHidden labels={["Folder", "Playlist"]}>
                    <div>
                      {config.musicDataFolderPath.map((item) => {
                        return (
                          <FolderList
                            dirPath={item}
                            isOpen={isOpenFunc(item)}
                          />
                        );
                      })}
                    </div>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "primary.dark",
                      }}
                    >
                      test
                    </Box>
                  </BasicTabsNoHidden>
                </Box>
              </FlexLeftZone>
            </Collapse>
            <FlexMainZone>
              <FlexMainZoneBox>
                <Collapse in={ViewStatsMidUpper} timeout="auto" unmountOnExit>
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
                    <BasicTabs labels={["Files", "DAW View", "Spectrogram"]}>
                      <div>
                        <FileList
                          dirPath={
                            mainWindowStats.selectedFolderStats
                              .shouldShowDirPathInMidMain
                          }
                        />
                      </div>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        test
                      </Box>
                    </BasicTabs>
                  </Box>
                </FlexMainZoneProjectZone>
              </FlexMainZoneBox>
            </FlexMainZone>
            <Collapse
              in={ViewStatsRight}
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
