import { Box, CssBaseline, CssVarsProvider, Stack } from "@mui/joy";
import { Outlet } from "react-router-dom";
import SidebarOne from "../../components/modules/SidebarOne";
import SidebarTwo from "../components/modules/SidebarTwo";
import { SiD } from "react-icons/si";

function AdminTwo() {
  return (
    <CssVarsProvider>
      <CssBaseline />

      <Box
        component="main"
        className="MainContent"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
          overflow: "auto",
        }}
      >
        {/* <BreadcrumTwo /> */}

        <Stack direction="row">
          <SidebarTwo />
        </Stack>
        <Outlet />
      </Box>
    </CssVarsProvider>
  );
}

export default AdminTwo;
