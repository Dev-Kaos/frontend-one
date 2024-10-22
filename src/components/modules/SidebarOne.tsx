import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { AdminSidebarItems as data } from "../../shared/constants/sidebarItems";
import ColorSchemeToggle from "./ColorSchemeToggle";
import { closeSidebar } from "../../shared/utils/utils";
import { TbLogout, TbSearch, TbUserShield } from "react-icons/tb";

import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import { useState } from "react";
import { useAuthStore } from "../../shared/store/authStore";

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: "grid",
            transition: "0.2s ease",
            "& > *": {
              overflow: "hidden",
            },
          },
          open ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" },
        ]}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

// ...otras propiedades

// TODO: componente Sidebar

export default function SidebarFour() {
  const [listIndex, setListIndex] = useState(0);

  const name = useAuthStore((state) => state.name);

  const role = useAuthStore((state) => state.role);

  const handleListClick = (index: any) => {
    setListIndex(index);
  };

  const handleSearch = () => {};
  const handleLogout = () => {};
  // TODO: componente Sidebar
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <IconButton
          variant="soft"
          color="primary"
          size="sm"
          onClick={() => closeSidebar()}
        >
          <TbUserShield size={20} />
        </IconButton>
        <Typography
          level="title-lg"
          sx={{ ml: "auto" }}
        >
          username
        </Typography>
        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>
      <Input
        size="sm"
        startDecorator={<TbSearch />}
        placeholder="Buscar"
      />
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        {/* // TODO: list */}
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            marginBottom: "20px",
            display: "flex",
          }}
        >
          {data.map((item, index) => (
            <ListItem
              key={item.title}
              sx={{ "--ListItem-minHeight": "32px" }}
            >
              <Link
                component={RouterLink}
                to={item.link}
                sx={{ flexGrow: 1 }}
              >
                <ListItemButton
                  selected={index === listIndex}
                  color={index === listIndex ? "primary" : undefined}
                  onClick={() => setListIndex(index)}
                  sx={{ fontSize: 16, flexGrow: 1 }}
                >
                  {item.icon}
                  <ListItemContent>
                    <Typography level="body-md">{item.title}</Typography>
                  </ListItemContent>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>

        {/* // TODO: Alert card */}

        <Card
          invertedColors
          variant="soft"
          color="success"
          size="sm"
          sx={{ boxShadow: "none" }}
        >
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography level="title-sm">Notificación</Typography>
            <IconButton size="sm">
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
          <Typography level="body-xs">esta es una notificación</Typography>
          <LinearProgress
            variant="outlined"
            value={80}
            determinate
            sx={{ my: 1 }}
          />
          <Button
            size="sm"
            variant="solid"
          >
            ver mas
          </Button>
        </Card>
      </Box>
      <Divider />

      {/* // TODO: footer */}

      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Avatar
          variant="outlined"
          size="sm"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">{name}</Typography>
          <Typography level="body-xs">{role}</Typography>
        </Box>
        <IconButton
          size="lg"
          variant="plain"
          color="neutral"
        >
          <TbLogout size={20} />
        </IconButton>
      </Box>
    </Sheet>
  );
}
