import React from "react";
import FolderList from "../../components/FolderList";
import { useSelector } from "react-redux";
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
