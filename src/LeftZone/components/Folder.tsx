import React, { useEffect, useState } from "react";

import getAPI from "../../module/getAPI";
import * as initialObj from "../../module/initialObj";
import FolderList from "../../components/FolderList";

import { useSelector, useDispatch } from "react-redux";
import { selectOpeningDirInTree } from "../../redux/slice/SelectedFolderStatsSlice";

const Folder = () => {
  const OpeningDirInTree = useSelector(selectOpeningDirInTree);
  const isOpenFunc = (value: string) => {
    return OpeningDirInTree.includes(value);
  };

  const [config, setConfig] = useState<api.Config>(initialObj.config);
  useEffect(() => {
    getAPI("get_lanch_config", setConfig);
  }, []);
  return (
    <>
      {config.musicDataFolderPath.map((item) => {
        return <FolderList dirPath={item} isOpen={isOpenFunc(item)} />;
      })}
    </>
  );
};

export default Folder;
