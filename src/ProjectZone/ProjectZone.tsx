import React from "react";
import Box from "@mui/material/Box";
import BasicTabs from "../components/BasicTabs";
import Files from "./components/Files";

const ProjectZone = () => {
  return (
    <BasicTabs labels={["Files", "DAW View", "Spectrogram"]}>
      <div>
        <Files />
      </div>
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        test
      </Box>
    </BasicTabs>
  );
};

export default ProjectZone;
