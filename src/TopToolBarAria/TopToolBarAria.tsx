import * as React from "react";

import Stack from "@mui/material/Stack";

import ZoneController from "./components/ZoneController";

const TopToolBarAria = () => {
  return (
    <Stack direction="row" spacing={0}>
      <ZoneController />
    </Stack>
  );
};
export default TopToolBarAria;
