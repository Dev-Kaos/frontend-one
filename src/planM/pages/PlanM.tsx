import {
  Box,
  Breadcrumbs,
  CssBaseline,
  CssVarsProvider,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import { Outlet, useLocation } from "react-router-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import { TbUserShield } from "react-icons/tb";
import NavOne from "../../shared/components/modules/NavOne";

function PlanM() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean); // Elimina posibles segmentos vacíos
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

        <Stack
          direction="row"
          sx={{
            p: { xs: 2, md: 2 },
            gap: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Breadcrumbs
              size="lg"
              aria-label="breadcrumbs"
              separator={<ChevronRightRoundedIcon sx={{ fontSize: 24 }} />}
              sx={{ pl: 0 }}
            >
              <Typography color="neutral">
                <TbUserShield size={24} />
              </Typography>
              {pathSegments.map((segment, index) => (
                <Typography
                  key={index}
                  color={
                    index === pathSegments.length - 1 ? "primary" : "neutral"
                  }
                >
                  {/* Aquí puedes personalizar cómo se muestra cada segmento */}
                  {segment}
                </Typography>
              ))}
            </Breadcrumbs>
          </Box>
          <Box>
            <NavOne />
          </Box>
        </Stack>
        <Outlet />
      </Box>
    </CssVarsProvider>
  );
}

export default PlanM;
