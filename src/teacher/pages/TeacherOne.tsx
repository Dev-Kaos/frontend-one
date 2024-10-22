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
import { TbBook, TbMenu2 } from "react-icons/tb";
import { Link } from "@mui/joy";

import { motion } from "framer-motion";

export default function DrawerFilters() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<TbMenu2 />}
        onClick={() => setOpen(true)}
      >
        Menu
      </Button>
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
            <Typography level="title-md">Modulos</Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: 2,
              }}
            >
              {/* TODO: modules */}
              <Box sx={{ gridColumn: "span 6" }}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        boxShadow: "md",
                        backgroundColor: "primary.200",

                        borderColor: "neutral.outlinedHoverBorder",
                      },
                    }}
                  >
                    <Typography
                      level="body-sm"
                      aria-describedby="card-description"
                      startDecorator={<TbBook />}
                    >
                      <Link
                        overlay
                        underline="none"
                        href="#jueputa"
                        sx={{ color: "text.tertiary" }}
                      >
                        Inicio
                      </Link>
                    </Typography>
                  </Card>
                </motion.div>
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            {/* TODO: modules */}
            <Box>
              <Typography level="title-md">Notificaciones</Typography>
            </Box>
          </DialogContent>
          <Divider sx={{ mt: "auto" }} />
          <Stack
            direction="row"
            useFlexGap
            spacing={1}
            sx={{ justifyContent: "space-between" }}
          >
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => {
                setType("");
                setAmenities([]);
              }}
            >
              Clear
            </Button>
            <Button onClick={() => setOpen(false)}>Show 165 properties</Button>
          </Stack>
        </Sheet>
      </Drawer>
    </>
  );
}
