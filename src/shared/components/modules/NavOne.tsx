import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import ModalClose from "@mui/joy/ModalClose";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useState } from "react";
import { TbLogout, TbMenu2 } from "react-icons/tb";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import {
  Avatar,
  IconButton,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
} from "@mui/joy";

import { motion } from "framer-motion";

import { Link as RouterLink } from "react-router-dom";

import { useAuthStore } from "../../../shared/store/authStore";

import { NavbarItems as data } from "../../constants/navbarItems";
import ColorSchemeToggle from "../../../components/modules/ColorSchemeToggle";

export default function NavOne() {
  const [open, setOpen] = useState(false);

  const [listIndex, setListIndex] = useState(0);

  const name = useAuthStore((state) => state.name);

  const role = useAuthStore((state) => state.role);

  return (
    <>
      <IconButton
        size="sm"
        variant="outlined"
        color="primary"
        // sx={{ position: "fixed", top: 32, right: 32 }}
        onClick={() => setOpen(true)}
      >
        <TbMenu2 />
      </IconButton>
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: "md",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <DialogTitle>Menu de Opciones</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "auto" }} />
          <DialogContent
            sx={{ gap: 2, display: "flex", flexDirection: "column", px: 2 }}
          >
            {/* TODO: modules */}
            <Typography level="title-md">Modulos</Typography>

            <List
              id="sidebarlist"
              key="sidebarlist"
              size="sm"
              sx={{
                "--ListItem-radius": (theme) => theme.vars.radius.sm,
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  gap: 2,
                }}
              >
                {data.map((item, index) => (
                  <Box
                    key={item.title}
                    sx={{ gridColumn: "span 6" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ListItem
                        key={item.title}
                        sx={{ "--ListItem-minHeight": "32px" }}
                        onClick={() => setOpen(false)}
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
                              <Typography level="body-md">
                                {item.title}
                              </Typography>
                            </ListItemContent>
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    </motion.div>
                  </Box>
                ))}
              </Box>
            </List>
          </DialogContent>
          <Divider sx={{ my: 1 }} />
          {/* TODO: modules */}
          <Box>
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
          <Divider sx={{}} />
          {/* // TODO: footer */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              alignContent: "center",
              flexStart: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                textAlign: "center",
                gap: 1,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <List
                  size="sm"
                  sx={{ "--List-item-paddingY": "4px" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemDecorator sx={{ mr: 1 }}>
                        <Avatar
                          size="sm"
                          src="https://unavatar.io/midudev"
                        />
                      </ListItemDecorator>
                      <ListItemContent>
                        <Typography level="body-sm">{name}</Typography>
                        <Typography
                          level="body-xs"
                          sx={{ color: "text.secondary" }}
                        >
                          {role}
                        </Typography>
                      </ListItemContent>
                    </ListItemButton>
                  </ListItem>
                </List>
              </motion.div>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.98 }}
              >
                <ColorSchemeToggle
                  sx={{ mr: 1 }}
                  size="sm"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconButton
                  size="sm"
                  variant="outlined"
                  // onClick={() => useAuthStore.getState().signOut()}
                  color="neutral"
                >
                  <TbLogout />
                </IconButton>
              </motion.div>
            </Box>
          </Box>
        </Sheet>
      </Drawer>
    </>
  );
}
