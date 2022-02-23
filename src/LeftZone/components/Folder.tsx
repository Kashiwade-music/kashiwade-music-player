import React, { useEffect, useState } from "react";

import getAPI from "../../module/getAPI";
import * as initialObj from "../../module/initialObj";
import FolderList from "../../components/FolderList";

import { useSelector, useDispatch } from "react-redux";
import { selectOpeningDirInTree } from "../../redux/slice/SelectedFolderStatsSlice";
import { selectMusicDataFolderPath } from "../../redux/slice/ConfigSlice";

const Folder = () => {
  const MusicDataFolderPath = useSelector(selectMusicDataFolderPath);
  console.log(MusicDataFolderPath);

  return (
    <>
      {MusicDataFolderPath.map((item) => {
        return <FolderList dirPath={item} />;
      })}
    </>
  );
};

export default Folder;
