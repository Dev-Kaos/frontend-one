import {
  Box,
  Card,
  CardContent,
  CardCover,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

import { AnimatePresence, motion, transform, useAnimate } from "framer-motion";

import {
  TbEdit,
  TbFileInfo,
  TbHelp,
  TbHomeSearch,
  TbInfoHexagon,
  TbInfoSquare,
  TbInfoSquareFilled,
  TbNews,
} from "react-icons/tb";
import NewsCreateOne from "../components/modules/NewsCreateOne";

function ANewsTwo() {
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

  const handleCreateNews = () => {
    setIsEditing(false);
    setIsCreating(true);
  };
  const handleEditNews = () => {
    setIsCreating(false);
    setIsEditing(true);
  };
  const handleInfoNews = () => {
    setIsCreating(false);
    setIsEditing(false);
  };

  // const handleSizeChange = (newSize) => {
  //   animate(
  //     scope.current,
  //     { width: newSize.width, height: newSize.height },
  //     {
  //       type: "spring",
  //       duration: 1,
  //     }
  //   );
  //   if (newSize.width === "400px") {
  //     animate(
  //       scope.current,
  //       { width: "800px", height: "700px" },
  //       {
  //         type: "spring",
  //         duration: 1,
  //       }
  //     );
  //   } else {
  //     animate(
  //       scope.current,
  //       { width: "800px", height: "600px" },
  //       {
  //         type: "spring",
  //         duration: 1,
  //       }
  //     );
  //   }
  // };
  return (
    <>
      <Box sx={{ flex: 1, width: "100%", height: "100vh", px: 2 }}>
        <motion.div
          animate={isLarge ? "large" : "small"}
          variants={variants}
          transition={{ type: "spring", duration: 1 }}
          style={{ backgroundColor: "red" }}
        >
          {isLarge ? (
            <p>Contenido cuando es grande</p>
          ) : (
            <p>Contenido cuando es pequeño</p>
          )}
        </motion.div>
        <button onClick={() => setIsLarge(!isLarge)}>cambiar</button>
      </Box>
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
              onClick={handleInfoNews}
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
              onClick={handleCreateNews}
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
              onClick={handleEditNews}
              size="lg"
            >
              <TbEdit style={{ marginRight: "5px" }} />
              Editar
            </IconButton>
          </motion.div>
          <Typography level="body-lg">las noticias</Typography>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack
          direction="row"
          sx={{ gap: 1, mt: 2, justifyContent: "space-around" }}
        >
          {/* <card render */}
          {/* {isCreating ? <p>probar</p> : <p>Creando</p>}
          {isEditing ? <p>probar</p> : <p>Editando</p>} */}
          {isCreating === false && isEditing === false ? (
            <Card>no esta creado ni editando</Card>
          ) : isCreating ? (
            <NewsCreateOne />
          ) : (
            <p>Editando</p>
          )}
        </Stack>
      </Box>
    </>
  );
}

export default ANewsTwo;
