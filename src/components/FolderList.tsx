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
import { useSelector, useDispatch } from "react-redux";
import {
  changeShouldShowDirPathInProjectZone,
  addOpeningDirInTree,
  deleteOpeningDirInTree,
  selectShouldShowDirPathInProjectZone,
  selectOpeningDirInTree,
} from "../redux/slice/SelectedFolderStatsSlice";

type Props = {
  dirPath: string;
  isOpen: boolean;
};

const FolderList = React.memo((props: Props) => {
  const ShouldShowDirPathInProjectZone = useSelector(
    selectShouldShowDirPathInProjectZone
  );
  const OpeningDirInTree = useSelector(selectOpeningDirInTree);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(props.isOpen);
  //OpeningDirInTree.includes(props.dirPath)
  //let dirData = initialObj.dirData;

  const [dirData, setDirData] = useState(initialObj.dirData);
  useEffect(() => {
    getAPI("get_dir_data", setDirData, { dirPath: props.dirPath });
  }, []);

  const handleClick = () => {
    if (!open) {
      // これから開くので追加
      dispatch(changeShouldShowDirPathInProjectZone(props.dirPath));
      dispatch(addOpeningDirInTree(props.dirPath));
    } else {
      // これから閉じるので配列だけ削除
      dispatch(deleteOpeningDirInTree(props.dirPath));
    }

    setOpen(!open);
  };

  const isOpenFunc = (value: api.DirData) => {
    return OpeningDirInTree.includes(value.fullPath);
  };

  return (
    <List
      dense={true}
      sx={{ width: "100%", p: 0 }}
      aria-labelledby="nested-list-subheader"
      disablePadding={true}
    >
      <ListItemButton
        key={dirData.dirData[0].name}
        onClick={() => {
          handleClick();
        }}
      >
        <ListItemIcon sx={{ minWidth: "32px" }}>
          <LibraryMusicIcon />
        </ListItemIcon>
        <ListItemText
          primary={dirData.dirData[0].name}
          sx={{
            ".MuiTypography-root": {
              fontSize: "0.8rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Box sx={{ pl: 2 }}>
        <Collapse in={open} unmountOnExit>
          <List dense={true} component="div" disablePadding>
            {dirData.dirData.map((value, index) => {
              if (value.depth === 1) {
                if (value.isDir && open) {
                  return (
                    <FolderList
                      dirPath={value.fullPath}
                      isOpen={isOpenFunc(value)}
                    />
                  );
                } else {
                  return (
                    <ListItemButton key={value.name}>
                      <ListItemIcon sx={{ minWidth: "32px" }}>
                        <AudioFileIcon />
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
              }
            })}
          </List>
        </Collapse>
      </Box>
    </List>
  );
});

export default FolderList;
