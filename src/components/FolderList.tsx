import React, { useEffect, useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import FolderIcon from "@mui/icons-material/Folder";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import * as initialObj from "../module/initialObj";
import StarBorder from "@mui/icons-material/StarBorder";
import getAPI from "../module/getAPI";

type Props = {
  dirPath: string;
};

function FolderList(props: Props) {
  const [open, setOpen] = useState(true);

  const [dirData, setDirData] = useState(initialObj.dirData);
  useEffect(() => {
    getAPI("get_dir_data", setDirData, { dirPath: props.dirPath });
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      dense={true}
      sx={{ width: "100%" }}
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LibraryMusicIcon />
        </ListItemIcon>
        <ListItemText primary={dirData.dirData[0].name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List dense={true} component="div" disablePadding>
          {dirData.dirData.map((value, index) => {
            if (value.isDir) {
              return (
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary={value.name} />
                </ListItemButton>
              );
            } else {
              return (
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AudioFileIcon />
                  </ListItemIcon>
                  <ListItemText primary={value.name} />
                </ListItemButton>
              );
            }
          })}
        </List>
      </Collapse>
    </List>
  );
}

export default FolderList;
