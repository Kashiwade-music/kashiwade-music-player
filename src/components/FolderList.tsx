import React, { useEffect, useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import * as initialObj from "../module/initialObj";
import { invoke } from "@tauri-apps/api/tauri";
import StarBorder from "@mui/icons-material/StarBorder";
import isJsonString from "../module/isJsonString";

type Props = {
  dirPath: string;
};

function FolderList(props: Props) {
  const [open, setOpen] = useState(true);

  const [dirData, setDirData] = useState(initialObj.dirData);
  useEffect(() => {
    const getLanchConfig = async () => {
      const initialData = await invoke("get_dir_data", {
        dirPath: props.dirPath,
      });
      console.log(initialData);
      if (isJsonString(initialData as string)) {
        setDirData(JSON.parse(initialData as string));
      } else {
        setDirData(initialData as any);
      }
    };
    getLanchConfig();
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
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

export default FolderList;
