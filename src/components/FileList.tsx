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
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import * as initialObj from "../module/initialObj";
import StarBorder from "@mui/icons-material/StarBorder";
import getAPI from "../module/getAPI";

type Props = {
  dirPath: string;
};

function FileList(props: Props) {
  const [dirData, setDirData] = useState(initialObj.dirData);
  useEffect(() => {
    getAPI("get_dir_data", setDirData, { dirPath: props.dirPath });
  }, [props]);

  return (
    <List
      dense={true}
      sx={{ width: "100%", p: 0 }}
      aria-labelledby="nested-list-subheader"
      disablePadding={true}
    >
      {dirData.dirData.map((value, index) => {
        if (index > 0 && !value.isDir) {
          return (
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "32px" }}>
                <LibraryMusicIcon />
              </ListItemIcon>
              <ListItemText
                primary={value.name}
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "0.8rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  },
                }}
              />
            </ListItemButton>
          );
        }
      })}
    </List>
  );
}

export default FileList;
