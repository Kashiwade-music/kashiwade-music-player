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
const FlexTopView = styled.div`
  height: 30px;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
`;

const FlexMidView = styled.div`
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
  height: calc(100% - 80px);
`;

const FlexMidViewBox = styled.div`
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
`;

const FlexLeftView = styled.div`
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
const FlexMainView = styled.div`
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
  height: 100%;
  max-height: 100%;
`;

const FlexMainViewBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  height: 100%;
  max-height: 100%;
`;

const FlexMainViewUpperView = styled.div`
  height: 150px;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
`;

const FlexMainViewLowerView = styled.div`
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
  height: calc(100% - 150px);
`;

const FlexRightView = styled.div`
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
const FlexBottomView = styled.div`
  height: 50px;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
`;

function App() {
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
        <FlexTopView>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderBottom: 1,
              borderColor: "divider",
              boxSizing: "border-box",
            }}
          >
            <TopMenuBar
              mainWindowStats={mainWindowStats}
              setMainWindowStats={setMainWindowStats}
            />
          </Box>
        </FlexTopView>
        <FlexMidView>
          <FlexMidViewBox>
            <Collapse
              in={mainWindowStats.viewStats.left}
              timeout="auto"
              unmountOnExit
              orientation="horizontal"
            >
              <FlexLeftView>
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
                            mainWindowStats={mainWindowStats}
                            setMainWindowStats={setMainWindowStats}
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
              </FlexLeftView>
            </Collapse>
            <FlexMainView>
              <FlexMainViewBox>
                <Collapse
                  in={mainWindowStats.viewStats.midUpper}
                  timeout="auto"
                  unmountOnExit
                >
                  <FlexMainViewUpperView>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderBottom: 1,
                        borderColor: "divider",
                        boxSizing: "border-box",
                      }}
                    ></Box>
                  </FlexMainViewUpperView>
                </Collapse>
                <FlexMainViewLowerView>
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
                </FlexMainViewLowerView>
              </FlexMainViewBox>
            </FlexMainView>
            <Collapse
              in={mainWindowStats.viewStats.right}
              timeout="auto"
              unmountOnExit
              orientation="horizontal"
            >
              <FlexRightView>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderLeft: 1,
                    borderColor: "divider",
                    boxSizing: "border-box",
                  }}
                ></Box>
              </FlexRightView>
            </Collapse>
          </FlexMidViewBox>
        </FlexMidView>
        <FlexBottomView>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "secondary.dark",
            }}
          ></Box>
        </FlexBottomView>
      </FlexParent>
    </div>
  );
}

export default App;
