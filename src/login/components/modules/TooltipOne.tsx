import Box from "@mui/joy/Box";
import Tooltip from "@mui/joy/Tooltip";
import Typography from "@mui/joy/Typography";

import Chip from "@mui/joy/Chip";
import { Button, Divider, IconButton } from "@mui/joy";
import {
  TbAlertTriangleFilled,
  TbInfoCircle,
  TbInfoTriangle,
} from "react-icons/tb";

export default function TooltipOne() {
  return (
    // TODO: Revisar el tooltip crear card, mejor estilo
    <Tooltip
      placement="top-end"
      variant="outlined"
      arrow
      title={
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 380,
            justifyContent: "center",
            alignItems: "center",
            p: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, width: "100%", mt: 1 }}>
            <div>
              <Chip
                size="md"
                color="warning"
                sx={{
                  ml: 4,
                  fontWeight: "lg",
                  "--Chip-paddingInline": "10px",
                  my: 1,
                }}
                startDecorator={<TbInfoTriangle />}
              >
                - No recuerdo mi cuenta o contraseña.
              </Chip>
              <Typography
                textColor="text.secondary"
                sx={{
                  fontSize: "sm",
                  ml: 1,
                  mt: 1,
                  mb: 2,
                  wordBreak: "break-word",
                }}
              >
                Si no puedes acceder a tu cuenta da click en:{" "}
                <Typography
                  variant="outlined"
                  color="primary"
                >
                  ¿Olvidaste tu contraseña?
                </Typography>{" "}
                alli podras acceder con alguno de los metodos de recuperación
                disponibles si aun no lo logras puedes contactarnos.
              </Typography>
              <Divider></Divider>
              <Chip
                size="md"
                color="danger"
                sx={{
                  ml: 9,
                  fontWeight: "lg",
                  "--Chip-paddingInline": "10px",
                  mt: 3,
                  mb: 2,
                }}
                startDecorator={<TbAlertTriangleFilled />}
              >
                - Aun no consigo ingresar
              </Chip>
              <Typography
                textColor="text.secondary"
                sx={{
                  fontSize: "sm",
                  ml: 1,
                  mt: 1,
                  mb: 2,
                  wordBreak: "break-word",
                }}
              >
                Si ya intentaste el paso anterior o tus datos son correctos y
                aun no puedes entrar a tu cuenta puedes contactarnos.
              </Typography>
            </div>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              width: "100%",
              mt: 1,
              justifyContent: "center",
            }}
          >
            <Button variant="plain">Contactanos</Button>
          </Box>
        </Box>
      }
    >
      <IconButton
        variant="plain"
        color="primary"
      >
        <TbInfoCircle fontSize={24} />
      </IconButton>
    </Tooltip>
  );
}
