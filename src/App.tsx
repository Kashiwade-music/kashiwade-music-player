import React, { useEffect, useState } from "react";
import { Collapse } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";
import BasicTabs from "./components/BasicTabs";
import { Button } from "@mui/material";
import * as initialObj from "./module/initialObj";
import "./App.css";
import FolderList from "./components/FolderList";
import { width } from "@mui/system";
import getAPI from "./module/getAPI";

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
  height: 50px;
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
  height: calc(100% - 100px);
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
`;
const FlexMainView = styled.div`
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
`;

const FlexMainViewBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  height: 100%;
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
`;

const FlexRightView = styled.div`
  width: 250px;
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
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
              backgroundColor: "primary.dark",
            }}
          ></Box>
        </FlexTopView>
        <FlexMidView>
          <FlexMidViewBox>
            <FlexLeftView>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <BasicTabs labels={["Folder", "Playlist"]}>
                  <div>
                    {config.musicDataFolderPath.map((item) => {
                      return <FolderList dirPath={item} />;
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
                </BasicTabs>
              </Box>
            </FlexLeftView>

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
                        backgroundColor: "secondary.light",
                      }}
                    ></Box>
                  </FlexMainViewUpperView>
                </Collapse>
                <FlexMainViewLowerView>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "success.light",
                    }}
                  >
                    <Button
                      onClick={() => {
                        setMainWindowStats({
                          ...mainWindowStats,
                          viewStats: {
                            ...mainWindowStats.viewStats,
                            midUpper: !mainWindowStats.viewStats.midUpper,
                          },
                        });
                      }}
                    >
                      open
                    </Button>
                  </Box>
                </FlexMainViewLowerView>
              </FlexMainViewBox>
            </FlexMainView>

            <FlexRightView>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "success.main",
                }}
              ></Box>
            </FlexRightView>
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
