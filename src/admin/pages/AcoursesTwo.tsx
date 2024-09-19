import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { SetStateAction, useState } from "react";
import { TabPanel, useTheme } from "@mui/joy";
import {
  TbBookDownload,
  TbBooks,
  TbBookUpload,
  TbHomePlus,
} from "react-icons/tb";
import React from "react";
import NewsTooltip from "../components/common/NewsTooltip";
import CoursesTable from "../components/modules/CoursesTable";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AcoursesOne() {
  // TODO: TABS
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (
    event: React.ChangeEvent<HTMLBaseElement>,
    newValue: SetStateAction<number>
  ) => {
    setTabValue(newValue);
  };

  const handleTabClick = (newValue: number) => {
    setTabValue(newValue);
  };

  // TODO: notify-toast theme
  const theme = useTheme();

  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Box sx={{ px: { xs: 2, md: 2 } }}>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1,
            mb: 2,
          }}
        >
          <Typography
            level="h2"
            component="h1"
            sx={{ fontWeight: 500 }}
            startDecorator={<TbBooks />}
          >
            Cursos
          </Typography>
          <NewsTooltip />
        </Stack>
      </Box>
      <Tabs
        defaultValue={0}
        sx={{ bgcolor: "transparent" }}
        value={tabValue}
        onChange={handleTabChange}
      >
        <TabList
          tabFlex={1}
          size="sm"
          sx={{
            pl: { xs: 0, md: 0 },
            justifyContent: "left",
            [`&& .${tabClasses.root}`]: {
              flex: "initial",
              color: "text.tertiary",
              [`&.${tabClasses.selected}`]: {
                bgcolor: "transparent",
                color: "text.primary",
                "&::after": {
                  height: "2px",
                  bgcolor: "primary.500",
                },
              },
            },
          }}
        >
          <Tab
            sx={{ borderRadius: "6px 6px 0 0" }}
            indicatorInset
            value={0}
          >
            <TbBookDownload size={20} />
            Buscar
          </Tab>
          <Tab
            sx={{ borderRadius: "6px 6px 0 0" }}
            indicatorInset
            value={1}
          >
            <TbBookUpload size={20} /> Crear
          </Tab>
          <Tab
            sx={{ borderRadius: "6px 6px 0 0" }}
            indicatorInset
            value={2}
          >
            <TbHomePlus size={20} /> prueba fetch
          </Tab>
        </TabList>

        <TabPanel value={0}>
          <CoursesTable />
        </TabPanel>
        <TabPanel value={1}></TabPanel>
      </Tabs>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme.palette.mode === "dark" ? "dark" : "light"}
      />
    </Box>
  );
}
