import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { textTransform } from "@mui/system";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{
        height: "100%",
        opacity: value !== index ? "hidden" : "visible",
      }}
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        {value === index && (
          <Box
            sx={{
              p: 0,
              maxHeight: "100%",
              overflow: "auto",
            }}
          >
            <Typography>{children}</Typography>
          </Box>
        )}
      </Box>
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type Props = {
  labels: string[];
  children: React.ReactNode[];
};

export default function BasicTabs(props: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {/*<Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
  <Tab label="Item Three" {...a11yProps(2)} />*/}
          {props.labels.map((label) => (
            <Tab label={label}></Tab>
          ))}
        </Tabs>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "calc(100% - 48px)",
        }}
      >
        {props.children.map((child, index) => (
          <TabPanel value={value} index={index}>
            {child}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
