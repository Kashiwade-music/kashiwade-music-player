import React, { useEffect, useState } from "react";
import BasicTabs from "../components/BasicTabs";
import getAPI from "../module/getAPI";
import * as initialObj from "../module/initialObj";
import FolderList from "../components/FolderList";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  changeShouldShowDirPathInMidMain,
  addOpeningDirInTree,
  deleteOpeningDirInTree,
  selectShouldShowDirPathInMidMain,
  selectOpeningDirInTree,
} from "../redux/slice/SelectedFolderStatsSlice";

const LeftZone = () => {
  const OpeningDirInTree = useSelector(selectOpeningDirInTree);
  const isOpenFunc = (value: string) => {
    return OpeningDirInTree.includes(value);
  };

  const [config, setConfig] = useState<api.Config>(initialObj.config);
  useEffect(() => {
    getAPI("get_lanch_config", setConfig);
  }, []);
  return (
    <BasicTabs labels={["Folder", "Playlist"]}>
      <div>
        {config.musicDataFolderPath.map((item) => {
          return <FolderList dirPath={item} isOpen={isOpenFunc(item)} />;
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
  );
};

export default LeftZone;
