import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import * as MySvgIcon from "../resources/MySvgIcon";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

type Props = {
  mainWindowStats: api.MainWindowsStats;
  setMainWindowStats: React.Dispatch<
    React.SetStateAction<api.MainWindowsStats>
  >;
};

const getDirection = (value: boolean) => {
  if (value) {
    return "contained";
  }
  return "outlined";
};

const TopMenuBar = (props: Props) => {
  return (
    <Stack direction="row" spacing={0}>
      <Button
        variant={getDirection(props.mainWindowStats.viewStats.left)}
        size="small"
        sx={{ minWidth: 0 }}
        onClick={() => {
          props.setMainWindowStats({
            ...props.mainWindowStats,
            viewStats: {
              ...props.mainWindowStats.viewStats,
              left: !props.mainWindowStats.viewStats.left,
            },
          });
        }}
        disableElevation
      >
        <SvgIcon
          component={MySvgIcon.LeftView}
          fontSize="small"
          inheritViewBox
        />
      </Button>
      <Button
        variant={getDirection(props.mainWindowStats.viewStats.midUpper)}
        size="small"
        sx={{ minWidth: 0 }}
        onClick={() => {
          props.setMainWindowStats({
            ...props.mainWindowStats,
            viewStats: {
              ...props.mainWindowStats.viewStats,
              midUpper: !props.mainWindowStats.viewStats.midUpper,
            },
          });
        }}
        disableElevation
      >
        <SvgIcon
          component={MySvgIcon.MidUpperView}
          fontSize="small"
          inheritViewBox
        />
      </Button>
      <Button
        variant={getDirection(props.mainWindowStats.viewStats.right)}
        size="small"
        sx={{ minWidth: 0 }}
        onClick={() => {
          props.setMainWindowStats({
            ...props.mainWindowStats,
            viewStats: {
              ...props.mainWindowStats.viewStats,
              right: !props.mainWindowStats.viewStats.right,
            },
          });
        }}
        disableElevation
      >
        <SvgIcon
          component={MySvgIcon.RightView}
          fontSize="small"
          inheritViewBox
        />
      </Button>
    </Stack>
  );
};
export default TopMenuBar;
