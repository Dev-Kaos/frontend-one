import { Box, Card, Divider, IconButton, Stack, Typography } from "@mui/joy";
import { useState } from "react";

import { motion, useAnimate } from "framer-motion";

import { TbEdit, TbFileInfo, TbNews } from "react-icons/tb";
import PModuleCreate from "../components/modules/PModuleCreate";
import PModuleEdit from "../components/modules/PModuleEdit";

function PModules() {
  // card states

  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [scope, animate] = useAnimate();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsLoaded(true);
  };

  const variants = {
    small: { width: 200, height: 100 },
    large: { width: "100%", height: "90%" },
  };

  const [isLarge, setIsLarge] = useState(false);

  const handleSizeChange = (newSize: { width: string; height: string }) => {
    animate(
      scope.current,
      { width: newSize.width, height: newSize.height },
      {
        type: "spring",
        duration: 1,
      }
    );
  };

  const handleCreateModule = () => {
    setIsEditing(false);
    setIsCreating(true);
  };
  const handleEditModule = () => {
    setIsCreating(false);
    setIsEditing(true);
  };
  const handleInfoModule = () => {
    setIsCreating(false);
    setIsEditing(false);
  };

  return (
    <>
      <Box sx={{ flex: 1, width: "100%", height: "100vh", px: 2 }}>
        <Stack
          direction="row"
          sx={{ gap: 1, justifyContent: "center", alignItems: "center" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              color="primary"
              variant="plain"
              onClick={handleInfoModule}
              size="lg"
            >
              <TbFileInfo size={22} />
            </IconButton>
          </motion.div>
          <Typography level="body-lg">
            Bienvenido en este modulo puedes:
          </Typography>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              color="primary"
              variant={isCreating ? "outlined" : "plain"}
              onClick={handleCreateModule}
              size="lg"
            >
              <TbNews style={{ marginRight: "5px" }} />
              Crear
            </IconButton>
          </motion.div>
          <Typography level="body-lg">y</Typography>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              color="primary"
              variant={isEditing ? "outlined" : "plain"}
              onClick={handleEditModule}
              size="lg"
            >
              <TbEdit style={{ marginRight: "5px" }} />
              Editar
            </IconButton>
          </motion.div>
          <Typography level="body-lg">los modulos</Typography>
        </Stack>
        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            mt: 1,
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 2,
          }}
        ></Box>
        {/* <card render */}
        {/* {isCreating ? <p>probar</p> : <p>Creando</p>}
          {isEditing ? <p>probar</p> : <p>Editando</p>} */}
        {isCreating === false && isEditing === false ? (
          <Card>no esta creado ni editando</Card>
        ) : isCreating ? (
          <PModuleCreate />
        ) : (
          <PModuleEdit />
        )}
      </Box>
    </>
  );
}

export default PModules;
