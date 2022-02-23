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
  changeShouldShowDirPathInProjectZone,
  addOpeningDirInTree,
  deleteOpeningDirInTree,
  selectShouldShowDirPathInProjectZone,
  selectOpeningDirInTree,
} from "../redux/slice/SelectedFolderStatsSlice";

const ProjectZone = () => {
  const ShouldShowDirPathInProjectZone = useSelector(
    selectShouldShowDirPathInProjectZone
  );
  const [mainWindowStats, setMainWindowStats] = useState(
    initialObj.mainWindowStats
  );

  return (
    <BasicTabs labels={["Files", "DAW View", "Spectrogram"]}>
      <div>
        <FileList dirPath={ShouldShowDirPathInProjectZone} />
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
