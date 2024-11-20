import { Box, Card, Divider, IconButton, Stack, Typography } from "@mui/joy";

import { motion } from "framer-motion";

import { TbEdit, TbFileInfo, TbNews } from "react-icons/tb";

import { useRolesStore } from "../store/rolesStore";

import PUserCreate from "../components/modules/users/PUserCreate";
import PUserEdit from "../components/modules/users/PUserEdit";

function PUsers() {
  const { isCreating, setIsCreating } = useRolesStore((state) => state);
  const { isEditing, setIsEditing } = useRolesStore((state) => state);
  // card states

  const handleCreateRoles = () => {
    setIsEditing(false);
    setIsCreating(true);
  };
  const handleEditRoles = () => {
    setIsCreating(false);
    setIsEditing(true);
  };
  const handleInfoRoles = () => {
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
              onClick={handleInfoRoles}
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
              onClick={handleCreateRoles}
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
              onClick={handleEditRoles}
              size="lg"
            >
              <TbEdit style={{ marginRight: "5px" }} />
              Editar
            </IconButton>
          </motion.div>
          <Typography level="body-lg">los usuarios</Typography>
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
          <PUserCreate />
        ) : (
          <PUserEdit />
        )}
      </Box>
    </>
  );
}

export default PUsers;
