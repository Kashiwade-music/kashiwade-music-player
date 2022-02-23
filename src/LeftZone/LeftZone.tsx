import React, { useEffect, useState } from "react";
import BasicTabs from "../components/BasicTabs";
import Box from "@mui/material/Box";
import Folder from "./components/Folder";

const LeftZone = () => {
  return (
    <BasicTabs labels={["Folder", "Playlist"]}>
      <div>
        <Folder />
      </div>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "primary.dark",
        }}
      >
        test
      </Box>
    </BasicTabs>
  );
};

export default LeftZone;
