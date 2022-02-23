import React, { useEffect, useState } from "react";
import { Collapse } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";
import BasicTabs from "../components/BasicTabs";
import BasicTabsNoHidden from "../components/BasicTabsNoHidden";
import { Button } from "@mui/material";
import * as initialObj from "../module/initialObj";
import FolderList from "../components/FolderList";
import { width } from "@mui/system";
import getAPI from "../module/getAPI";
import TopToolBarAria from "../TopToolBarAria/TopToolBarAria";
import FileList from "../components/FileList";
import { useSelector, useDispatch } from "react-redux";
import {
  selectViewStatsLeft,
  selectViewStatsMidUpper,
  selectViewStatsRight,
} from "../redux/slice/ViewStatsSlice";
import {
  changeShouldShowDirPathInMidMain,
  addOpeningDirInTree,
  deleteOpeningDirInTree,
  selectShouldShowDirPathInMidMain,
  selectOpeningDirInTree,
} from "../redux/slice/SelectedFolderStatsSlice";

const ProjectZone = () => {
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
    <BasicTabs labels={["Files", "DAW View", "Spectrogram"]}>
      <div>
        <FileList
          dirPath={
            mainWindowStats.selectedFolderStats.shouldShowDirPathInMidMain
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
  );
};

export default ProjectZone;
