import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import * as MySvgIcon from "../resources/MySvgIcon";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { useSelector, useDispatch } from "react-redux";
import {
  selectViewStatsLeft,
  selectViewStatsMidUpper,
  selectViewStatsRight,
  changeLeft,
  changeMidUpper,
  changeRight,
} from "../redux/slice/ViewStatsSlice";

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
  const ViewStatsLeft = useSelector(selectViewStatsLeft);
  const ViewStatsMidUpper = useSelector(selectViewStatsMidUpper);
  const ViewStatsRight = useSelector(selectViewStatsRight);
  const dispatch = useDispatch();

  return (
    <Stack direction="row" spacing={0}>
      <Button
        variant={getDirection(ViewStatsLeft)}
        size="small"
        sx={{ minWidth: 0 }}
        onClick={() => {
          dispatch(changeLeft());
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
        variant={getDirection(ViewStatsMidUpper)}
        size="small"
        sx={{ minWidth: 0 }}
        onClick={() => {
          dispatch(changeMidUpper());
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
        variant={getDirection(ViewStatsRight)}
        size="small"
        sx={{ minWidth: 0 }}
        onClick={() => {
          dispatch(changeRight());
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
