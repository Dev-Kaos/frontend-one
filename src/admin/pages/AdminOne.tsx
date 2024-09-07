import { Box, CssBaseline, CssVarsProvider } from "@mui/joy";
import { Outlet } from "react-router-dom";

function AdminOne() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        {/* <SidebarFour
          data={sidebarData}
          user={sidebarUserData}
        />
        <Header /> */}
        <Box
          component="main"
          className="MainContent"
          sx={{
            pt: { xs: "calc(12px + var(--Header-height))", md: 3 },
            pb: { xs: 2, sm: 2, md: 3 },
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
          <Outlet />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

export default AdminOne;
