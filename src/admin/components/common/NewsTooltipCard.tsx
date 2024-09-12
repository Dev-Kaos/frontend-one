import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";

import {
  TbHeadset,
  TbHelp,
  TbHomePlus,
  TbHomeSearch,
  TbSearch,
  TbTrash,
} from "react-icons/tb";

export default function NewsTooltipCard() {
  return (
    <Card variant="plain">
      <Chip
        size="md"
        variant="outlined"
        color="primary"
      >
        Información Basica
      </Chip>
      {/* <Typography level="h2">Professional</Typography> */}
      <Divider inset="none" />
      <List
        size="sm"
        sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}
      >
        <ListItem>
          <ListItemDecorator>
            <Check />
          </ListItemDecorator>
          Puedes ver las noticias en{" "}
          <Typography
            color="primary"
            startDecorator={<TbHomeSearch />}
          >
            Buscar
          </Typography>
          dando click en{" "}
          <Typography
            color="primary"
            startDecorator={<TbSearch />}
          ></Typography>{" "}
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <Check />
          </ListItemDecorator>
          Puedes aplicar cualquier filtro a la busqueda{" "}
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <Check />
          </ListItemDecorator>
          Al editar una noticia se abrira en el panel{" "}
          <Typography
            color="primary"
            startDecorator={<TbHomePlus />}
          >
            Crear
          </Typography>{" "}
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <Check />
          </ListItemDecorator>
          Cuidado{" "}
          <Typography
            color="danger"
            startDecorator={<TbTrash />}
          >
            Eliminar
          </Typography>{" "}
          es una accion no reversible
        </ListItem>

        <Divider
          inset="none"
          sx={{ my: 2 }}
        />
        <ListItem>
          <ListItemDecorator>
            <Check />
          </ListItemDecorator>
          Puedes ver la documentación en{" "}
          <Typography
            color="primary"
            startDecorator={<TbHelp />}
          >
            Manual
          </Typography>{" "}
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <Check />
          </ListItemDecorator>
          Preguntas frecuentes en{" "}
          <Typography
            color="primary"
            startDecorator={<TbHelp />}
          >
            Manual
          </Typography>{" "}
        </ListItem>
      </List>
      <Divider inset="none" />
      <CardActions>
        <Typography
          level="body-sm"
          sx={{ ml: "auto" }}
        >
          ¿Necesitas ayuda?
        </Typography>
        <Button
          variant="outlined"
          endDecorator={<TbHeadset size={20} />}
        >
          Contactanos
        </Button>
      </CardActions>
    </Card>
  );
}
